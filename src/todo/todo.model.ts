import * as _ from 'lodash';

import observableFactory from '../common/observable-factory';

import { Todo } from './todo.interface';

const todos: Todo[] = [];

export const observable = observableFactory();

export function getTodos(): Todo[] {
    return _.cloneDeep(todos);
}

export function addTodo(todo: Todo) {
    todos.push(todo);
    observable.notifyAll();
}

export function updateTodo(todo: Todo) {
    _.forEach(todos, (t, index) => {
        if (t.id === todo.id) {
            todos[index] = todo;
        }
    });
    observable.notifyAll();
}

export function removeTodo(todo: Todo) {
    _.remove(todos, t => t.id === todo.id);
    observable.notifyAll();
}

