import * as AuthService from '../auth/auth.service';
import * as AuthModel from '../auth/auth.model';
import * as LoadingInterceptor from '../common/loading.interceptor';
import * as TodoService from '../todo/todo.service';

export function init() {
    return AuthService.init()
        .then(() => { LoadingInterceptor.registerLoadingInterceptor(); })
        .then(() => { TodoService.init(AuthModel.isAuthenticated()); });
}