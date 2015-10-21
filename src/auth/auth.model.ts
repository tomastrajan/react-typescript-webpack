import * as Auth0Lock from 'auth0-lock';

const Lock = new Auth0Lock('A9xnMR5yCNlOs0HbLB17OeOUZpCYnG4G', 'tomastrajan.eu.auth0.com');

export function login() {
    let options = {
        authParams: {
            scope: 'openid profile'
        }
    };
    Lock.show(options, (err, profile, token) => {
        localStorage.setItem('id_token', token);
        console.log(err, profile, token)
    });
}

export function logout() {
    Lock.logout(function() {
        localStorage.setItem('id_token', '');
    })
}