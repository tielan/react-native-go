/*
method - 支持GET, POST, PUT, DELETE, HEAD
url - 请求的url
headers - 对应的Headers对象
reference - 请求的referrer 信息
mode - 可以设置 cors, no-cors, same-origin
credentials - 设置cookies是否随请求一起发送。可以设置：omit, same-origin
integrity - subresource完整性值（integrity value）
cache - 设置cache模式（default, reload, no-cache）
*/

import { AsyncStorage } from 'react-native';

const config = {
    baseUrl: '',
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
        'Content-Type': 'text/html;charset=GBK',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
    },
    credentials: 'same-origin',
    expiry:5 * 60,
};

export function initConfig(baseUrl, headers) {
    if (baseUrl) {
        config.baseUrl = baseUrl;
    }
    if (headers) {
        config.headers = headers;
    }
}

export function get(reqUrl, params = {}, expiry) {
    var paramsStr = '';
    for (var key in params) {
        var value = params[key];
        if (value && value.length > 0) {
            value = value.replace(/^\s+|\s+$/g, "");
        }
        paramsStr += key + '=' + value + '&';
    }
    var url = '';
    if (reqUrl.indexOf('?') === -1) {
        url = reqUrl + '?' + paramsStr;
    } else {
        url = reqUrl + '&' + paramsStr;
    }
    return fetchJSON(url, { method: 'GET', headers: config.headers, credentials: config.credentials, expiry: expiry });
}

export function getUri(uri, params = {},expiry) {
    return get(config.baseUrl + uri, params,cacheSec);
}

export function post(reqUrl, params = {}, expiry) {
    return fetchJSON(reqUrl, { method: 'POST', headers: config.headers, body: JSON.stringify(params), credentials: config.credentials, expiry: expiry });
}

export function postUri(uri, params = {},expiry) {
    return post(config.baseUrl + uri, params,expiry);
}
//带本地缓存的请求
export function fetchJSON(url, options) {
    let expiry = options.expiry || expiry // 5 min default
    // Use the URL as the cache key to sessionStorage
    let cacheKey = url
    getItem(cacheKey + ':ts', (success, text) => {
        if (success) {
            let age = (Date.now() - whenCached) / 1000
            if (age < expiry) {
                getItem(cacheKey, (success, text) => {
                    if (success) {
                        let response = new Response(new Blob([cached]))
                        return Promise.resolve(response)
                    } else {
                        fetchAction(cacheKey, url, options);
                    }
                });
            } else {
                removeItem(cacheKey)
                removeItem(cacheKey + ':ts')
            }
        } else {
            fetchAction(cacheKey, url, options);
        }
    });
}
//http 请求
function fetchAction(cacheKey, url, options) {
    let ok
    return new Promise((resolve, reject) => {
        console.log('fetch Data:' + url);
        return fetch(url, options)
            .then(
            (response) => {
                if (response.ok) {
                    isOK = true;
                    let ct = response.headers.get('Content-Type')
                    if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
                        // There is a .json() instead of .text() but 
                        // we're going to store it in sessionStorage as 
                        // string anyway.
                        // If we don't clone the response, it will be 
                        // consumed by the time it's returned. This 
                        // way we're being un-intrusive. 
                        response.clone().text().then(content => {
                            setItem(cacheKey, content)
                            setItem(cacheKey + ':ts', Date.now())
                        })
                    }
                } else {
                    isOK = false;
                }
                return response.json();
            }
            ).then((responseData) => {
                if (isOk) {
                    resolve(responseData)
                } else {
                    reject(responseData)
                }
            }).catch(
            (error) => {
                console.log(error);
                return reject(error);
            });
    });
}

//设置缓存
function setItem(key, value) {
    AsyncStorage.setItem(key, value, () => {
        console.log('setItem [' + key + '] success');
    });
}
//获取缓存
function getItem(key, callBack) {
    AsyncStorage.getItem(key, (error, text) => {
        let success = true;
        if (text === null) {
            success = false;
            console.log('getItem [' + key + '] no the key');
        } else {
            console.log('getItem [' + key + '] success');
        }
        if (callBack) {
            callBack(success, text);
        }
    });
}
//从缓存中移除
function removeItem(key) {
    AsyncStorage.removeItem(key, () => {
        console.log('remove [' + key + '] success');
    });
}