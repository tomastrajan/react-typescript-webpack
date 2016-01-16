import * as axios from 'axios';
import * as Auth0Lock from 'auth0-lock';
import * as Promise from 'bluebird';

import * as model from './auth.model';
import * as interceptor from './auth.interceptor';

import { Profile } from './auth.interface';

const lock: any = new Auth0Lock('A9xnMR5yCNlOs0HbLB17OeOUZpCYnG4G', 'tomastrajan.eu.auth0.com');
const LOGOUT_URL: string = 'https://tomastrajan.eu.auth0.com/v2/logout?federated';

export function login() {
    return new Promise((resolve: any, reject: any) => {
        let options: any = {authParams: { scope: 'openid profile' }};
        lock.show(options, function(err: any, profile: Profile, token: any) {
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
    return new Promise((resolve: any, reject: any) => {
        let token: string = localStorage.getItem('id_token');
        if (token) {
            interceptor.registerAuthTokenInterceptor(token);
            lock.getProfile(token, function (err: any, profile: Profile) {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                interceptor.registerUserInterceptor(profile.user_id);
                model.setProfile(profile as Profile);
                resolve();
            });
        } else {
            resolve();
        }
    });
}
