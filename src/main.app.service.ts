import * as AuthAppService from './auth/auth.app.service.ts';
import * as AuthService from './auth/auth.service.ts';
import * as AuthModel from './auth/auth.model.ts';
import * as AuthInterceptor from './auth/auth.interceptor.ts';
import * as LoadingInterceptor from './common/loading/loading.interceptor.ts';
import * as TodoService from './todo/todo.service.ts';

export function init() {
    return AuthService.init()
        .then(() => { LoadingInterceptor.registerLoadingInterceptor(); })
        .then(() => { AuthInterceptor.registerUnauthorizedInterceptor(AuthAppService.logout); })
        .then(() => { TodoService.init(AuthModel.isAuthenticated()); });
}