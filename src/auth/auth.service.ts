import * as Auth0Lock from 'auth0-lock';

import * as model from './auth.model';

import { Profile } from './auth.interface';

const Lock = new Auth0Lock('A9xnMR5yCNlOs0HbLB17OeOUZpCYnG4G', 'tomastrajan.eu.auth0.com');

export function login() {
    console.log(location.href);
    let options = {
        authParams: {
            scope: 'openid profile'
        }
    };
    Lock.show(options);
}

export function logout() {
    Lock.logout();
    localStorage.removeItem('id_token');
    model.setProfile(undefined);
}

export function init() {
    getTokenFromHash();
    loadProfile();
}

function getTokenFromHash() {
    var hash = Lock.parseHash(window.location.hash);
    if (hash && hash.id_token) {
        localStorage.setItem('id_token', hash.id_token);
    }
}

function loadProfile() {
    let token = localStorage.getItem('id_token');
    if (token) {
        Lock.getProfile(token, function (err, profile) {
            if (err) {
                return console.log(err);
            }
            model.setProfile(profile as Profile);
        });
    }
}
