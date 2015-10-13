import * as _ from 'lodash';

import { Todo } from './todo.interface';

const todos: Todo[] = [];
const listeners = [];

export function getTodos(): Todo[] {
    return _.cloneDeep(todos);
}

export function addTodo(todo: Todo) {
    todos.push(todo);
    notifyChangeListeners();
}

export function updateTodo(todo: Todo) {
    _.forEach(todos, (t, index) => {
        if (t.id === todo.id) {
            todos[index] = todo;
        }
    });
    notifyChangeListeners();
}

export function removeTodo(todo: Todo) {
    _.remove(todos, t => t.id === todo.id);
    notifyChangeListeners();
}

export function addChangeListener(callback) {
    listeners.push(callback);
}

export function removeChangeListener(callback) {
    _.remove(listeners, l => l === callback);
}

function notifyChangeListeners() {
    _.forEach(listeners, callback => callback());
}
