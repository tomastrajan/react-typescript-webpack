import * as Promise from 'bluebird';
import * as axios from 'axios';

let authTokenInterceptor;
let userInterceptor;

export function registerAuthTokenInterceptor(token) {
    authTokenInterceptor = axios.interceptors.request.use(function (config) {
        config.headers['Authorization'] = 'Bearer ' + token;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
}

export function deregisterAuthTokenInterceptor() {
    axios.interceptors.request.eject(authTokenInterceptor);
}

export function registerUserInterceptor(userId) {
    userInterceptor = axios.interceptors.request.use(function (config) {
        if (config.url.indexOf('todos-server') > 0) {
            config.headers['X-USER-ID'] = userId;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
}

export function deregisterUserInterceptor() {
    axios.interceptors.request.eject(userInterceptor);
}
