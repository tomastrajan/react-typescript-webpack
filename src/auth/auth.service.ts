import * as axios from 'axios';
import * as Auth0Lock from 'auth0-lock';
import * as Promise from 'bluebird';

import * as model from './auth.model';
import * as interceptor from './auth.interceptor';

import { Profile } from './auth.interface';

const Lock = new Auth0Lock('A9xnMR5yCNlOs0HbLB17OeOUZpCYnG4G', 'tomastrajan.eu.auth0.com');
const LOGOUT_URL = 'https://tomastrajan.eu.auth0.com/v2/logout?federated';

export function login() {
    return new Promise((resolve, reject) => {
        let options = {authParams: { scope: 'openid profile' }};
        Lock.show(options, function(err, profile, token) {
            if (err) {
                console.log(err);
                return reject(err);
            }
            localStorage.setItem('id_token', token);
            interceptor.registerAuthTokenInterceptor(token);
            interceptor.registerUserInterceptor(profile.user_id);
            model.setProfile(profile as Profile);
            resolve();
        });
    });
}

export function logout() {
    return axios.get(LOGOUT_URL)
        .then(() => {
            interceptor.deregisterAuthTokenInterceptor();
            interceptor.deregisterUserInterceptor();
            localStorage.removeItem('id_token');
            model.setProfile(undefined);
        });
}

export function init() {
    return new Promise((resolve, reject) => {
        let token = localStorage.getItem('id_token');
        if (token) {
            interceptor.registerAuthTokenInterceptor(token);
            Lock.getProfile(token, function (err, profile) {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                interceptor.registerUserInterceptor(profile.user_id);
                interceptor.registerUnauthorizedInterceptor(logout);
                model.setProfile(profile as Profile);
                resolve();
            });
        } else {
            resolve();
        }
    });
}
