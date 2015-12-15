import * as AuthService from './auth.service';
import * as AuthModel from './auth.model';
import * as TodoService from '../todo/todo.service';


export function login() {
    return AuthService.login()
        .then(() => { TodoService.init(AuthModel.isAuthenticated()) });
}

export function logout() {
    return AuthService.logout()
        .then(() => { TodoService.init(AuthModel.isAuthenticated()) });
}