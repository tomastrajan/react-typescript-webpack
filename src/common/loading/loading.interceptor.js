var Promise = require('bluebird');
var axios = require('axios');
var observable_factory_1 = require('../observable-factory');
var requestLoadingInterceptor;
var responseLoadingInterceptor;
var outstandingRequestCount = 0;
exports.observable = observable_factory_1.default();
function isLoading() {
    return outstandingRequestCount > 0;
}
exports.isLoading = isLoading;
function registerLoadingInterceptor() {
    requestLoadingInterceptor = axios.interceptors.request.use(function (config) {
        outstandingRequestCount++;
        exports.observable.notifyAll();
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    responseLoadingInterceptor = axios.interceptors.response.use(function (response) {
        outstandingRequestCount--;
        exports.observable.notifyAll();
        return response;
    }, function (error) {
        outstandingRequestCount--;
        exports.observable.notifyAll();
        return Promise.reject(error);
    });
}
exports.registerLoadingInterceptor = registerLoadingInterceptor;
function deregisterLoadingInterceptor() {
    axios.interceptors.request.eject(requestLoadingInterceptor);
    axios.interceptors.request.eject(responseLoadingInterceptor);
}
exports.deregisterLoadingInterceptor = deregisterLoadingInterceptor;
//# sourceMappingURL=loading.interceptor.js.map