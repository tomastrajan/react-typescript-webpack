import * as Promise from 'bluebird';
import * as axios from 'axios';

let authTokenInterceptor: any;
let userInterceptor: any;
let unauthorizedInterceptor: any;

export function registerAuthTokenInterceptor(token: string) {
    authTokenInterceptor = axios.interceptors.request.use(function (config: any) {
        config.headers.Authorization = 'Bearer ' + token;
        return config;
    }, function (error: any) {
        return Promise.reject(error);
    });
}

export function deregisterAuthTokenInterceptor() {
    axios.interceptors.request.eject(authTokenInterceptor);
}

export function registerUserInterceptor(userId: string) {
    userInterceptor = axios.interceptors.request.use(function (config: any) {
        if (config.url.indexOf('todos-server') > 0) {
            config.headers['X-USER-ID'] = userId;
        }
        return config;
    }, function (error: any) {
        return Promise.reject(error);
    });
}

export function deregisterUserInterceptor() {
    axios.interceptors.request.eject(userInterceptor);
}

export function registerUnauthorizedInterceptor(handler: any) {
    unauthorizedInterceptor = axios.interceptors.response.use(function (response: any) {
        return response;
    }, function (error: any) {
        if (error && error.status === 401) {
            handler();
        }
        return Promise.reject(error);
    });
}

export function deregisterUnauthorizedInterceptor() {
    axios.interceptors.request.eject(unauthorizedInterceptor);
}
