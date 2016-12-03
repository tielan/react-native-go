const config = {
    baseUrl: '',
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
        'Content-Type': 'text/html;charset=GBK',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
    }
};

export function initConfig(baseUrl, headers) {
    if (baseUrl) {
        config.baseUrl = baseUrl;
    }
    if (headers) {
        config.headers = headers;
    }
}

export function fetchJSON(url, options) {
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

export function get(reqUrl, params = {}) {
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
    return fetchJSON(url, { method: 'GET', headers: config.headers });
}
export function getUri(uri, params = {}) {
    return get(baseUrl + uri, params);
}
export function post(reqUrl, params = {}) {
    return fetchJSON(reqUrl, { method: 'POST', headers: config.headers, body: JSON.stringify(params) });
}
export function postUri(uri, params = {}) {
    return post(baseUrl + uri, params);
}