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

const defaultConfig = {
    baseUrl: '',
    Dbug: true,
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
        'Content-Type': 'text/html;charset=GBK',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
    },
    credentials: 'same-origin',
    expiry: 5 * 60,
};
let config = defaultConfig;

export function initConfig(_config) {
    config = Object.assign({}, defaultConfig, _config);
}

export function getUri(uri, params = {}, expiry) {
    return get(config.baseUrl + uri, params, expiry);
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


export function postUri(uri, params = {}, expiry) {
    return post(config.baseUrl + uri, params, expiry);
}

export function post(reqUrl, params = {}, expiry) {
    return fetchJSON(reqUrl, { method: 'POST', headers: config.headers, body: JSON.stringify(params), credentials: config.credentials });
}


//带本地缓存的请求
export function fetchJSON(url, options) {
    let expiry = options.expiry || config.expiry // 5 min default
    // Use the URL as the cache key to sessionStorage
    let cacheKey = url
    if ('GET' === options.method) {
        console.log(url)
        return Promise.resolve(getItem(cacheKey + ':ts')).then((whenCached) => {
            if (whenCached) {
                let age = (Date.now() - parseInt(whenCached)) / 1000
                if (age < expiry) {
                    return Promise.resolve(getItem(cacheKey)).then((cached) => {
                        if (cached) {
                            return new Promise((resolve, reject) => {
                                resolve(JSON.parse(cached), true)
                            });
                        } else {
                            return fetchAction(url, options, cacheKey);
                        }
                    });
                } else {
                    removeItem(cacheKey)
                    removeItem(cacheKey + ':ts')
                }
            }
            return fetchAction(url, options, cacheKey);
        });
    } else {
        return fetchAction(url, options);
    }
}

//http 请求
function fetchAction(url, options, cacheKey) {
    let ok
    return new Promise((resolve, reject) => {
        console.log('fetch Data:' + url);
        return fetch(url, options)
            .then(
            (response) => {
                if (response.ok) {
                    isOK = true;
                } else {
                    isOK = false;
                }
                return response.text();
            })
            .then((responseData) => {
                let jsonData = responseData;
                try {
                    jsonData = JSON.parse(responseData);
                    if (cacheKey) {
                        setItem(cacheKey, responseData);
                        setItem(cacheKey + ':ts', Date.now() + '');
                    }
                    isOk = true;
                } catch (e) {
                    isOk = false;
                }
                if (isOk) {
                    resolve(jsonData)
                } else {
                    reject('服务器数据格式错误！')
                }
            }).catch(
            (error) => {
                console.log(error);
                return reject('网络错误！');
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
    return AsyncStorage.getItem(key);
}
//从缓存中移除
function removeItem(key) {
    AsyncStorage.removeItem(key, () => {
        console.log('remove [' + key + '] success');
    });
}