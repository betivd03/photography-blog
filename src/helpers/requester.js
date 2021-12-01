import * as authService from "../services/authService.js";

function request(method, url, data) {
    let user = authService.getUser();
    let headers = {};

    if (method !== 'GET' && method !== 'DELETE') {
        headers['Content-Type'] = 'application/json';
    }

    if (user) {
        headers['X-Authorization'] = user.accessToken;
    }

    let body = JSON.stringify(data);

    let options= { method, headers, body };

    return fetch(url, options)
        .then(res => {
            if (res.url.endsWith('logout')) {
                return res;
            }
            return res.json();
        });
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');