var baseUrl = '';

export function setBaseUrl(url) {
    baseUrl = url;
}
export function getBaseUrl() {
    return baseUrl;
}

export function fetchAction(url, options) {
    return new Promise((resolve, reject) => {
        console.log('fetch Data:' + url);
        return fetch(url, options).then(
            (response) => {
                resolve(response);
            }
        ).catch(
            (error) => {
                console.log(error);
                return reject(error);
            }
            );
    });
}

export function getJson(uri, params = {}) {
    var paramsStr = '';
    for (var key in params) {
        var value = params[key];
        if (value && value.length > 0) {
            value = value.replace(/^\s+|\s+$/g, "");
        }
        paramsStr += key + '=' + value + '&';
    }
    var reqUrl = baseUrl + uri + '?' + paramsStr;
    return fetchAction(reqUrl, {
        method: 'GET', headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
            'Content-Type': 'text/html;charset=GBK',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
        }
    });
}

export function postJson(uri, params = {}) {
    var reqUrl = baseUrl + uri;
    return fetchAction(reqUrl, {
        method: 'POST', headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
            'Content-Type': 'text/plain;charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
            'Host': '',
        }, body: JSON.stringify(params)
    });
}