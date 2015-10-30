import * as Promise from 'bluebird';
import * as axios from 'axios';

import observableFactory from '../common/observable-factory';

let requestLoadingInterceptor;
let responseLoadingInterceptor;
let outstandingRequestCount = 0;

export const observable = observableFactory();

export function isLoading() {
    return outstandingRequestCount > 0;
}

export function registerLoadingInterceptor() {
    requestLoadingInterceptor = axios.interceptors.request.use(function (config) {
        outstandingRequestCount++;
        observable.notifyAll();
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    responseLoadingInterceptor = axios.interceptors.response.use(function (response) {
        outstandingRequestCount--;
        observable.notifyAll();
        return response;
    }, function (error) {
        outstandingRequestCount--;
        observable.notifyAll();
        return Promise.reject(error);
    });
}

export function deregisterLoadingInterceptor() {
    axios.interceptors.request.eject(requestLoadingInterceptor);
    axios.interceptors.request.eject(responseLoadingInterceptor);
}