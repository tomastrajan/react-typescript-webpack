import * as _ from 'lodash';
import * as uuid from 'uuid';

import observableFactory from '../common/observable-factory';

import { Todo } from './todo.interface';

const todos: Todo[] = [
    {id: uuid.v4(), description: 'Finish todo example', done: true},
    {id: uuid.v4(), description: 'Add todo persistence', done: false},
    {id: uuid.v4(), description: 'Add authentication', done: false}
];

export const observable = observableFactory();

export function getTodo(id: string): Todo {
    return _.cloneDeep(_.find(todos, t => t.id === id));
}

export function getTodos(): Todo[] {
    return _.cloneDeep(todos);
}

export function getDoneTodos(): number {
    return _.reduce(todos, (sum, t) => { return t.done ? ++sum : sum; }, 0);
}

export function getPendingTodos(): number {
    return _.reduce(todos, (sum, t) => { return !t.done ? ++sum : sum; }, 0);
}

export function addTodo(todo: Todo) {
    todos.push(todo);
    observable.notifyAll();
}

export function replaceTodo(todo: Todo) {
    _.forEach(todos, (t, index) => {
        if (t.id === todo.id) {
            todos[index] = todo;
        }
    });
    observable.notifyAll();
}

export function removeTodo(id: string) {
    _.remove(todos, t => t.id === id);
    observable.notifyAll();
}

