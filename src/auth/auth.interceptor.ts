import * as Promise from 'bluebird';
import * as axios from 'axios';

let authTokenInterceptor;
let userInterceptor;
let unauthorizedInterceptor;

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

export function registerUnauthorizedInterceptor(handler) {
    unauthorizedInterceptor = axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error && error.status === 401) {
            handler();
        }
        return Promise.reject(error);
    });
}

export function deregisterUnauthorizedInterceptor() {
    axios.interceptors.request.eject(unauthorizedInterceptor);
}

