import * as _ from 'lodash';

import observableFactory, { Observable } from '../common/observable-factory';

import { Todo } from './todo.interface';

let todos: Todo[] = [];

export const observable: Observable = observableFactory();

export function getTodo(id: string): Todo {
    return _.cloneDeep(_.find(todos, (t: Todo) => t.id === id));
}

export function getTodos(): Todo[] {
    return _.cloneDeep(todos);
}

export function getDoneTodos(): number {
    return _.reduce(todos, (sum: number, t: Todo) => { return t.done ? ++sum : sum; }, 0);
}

export function getPendingTodos(): number {
    return _.reduce(todos, (sum: number, t: Todo) => { return !t.done ? ++sum : sum; }, 0);
}

export function setTodos(newTodos: Todo[]) {
    todos = _.cloneDeep(newTodos);
    observable.notifyAll();
}

export function addTodo(todo: Todo) {
    todos.push(todo);
    observable.notifyAll();
}

export function replaceTodo(todo: Todo) {
    _.forEach(todos, (t: Todo, index: number) => {
        if (t.id === todo.id) {
            todos[index] = todo;
        }
    });
    observable.notifyAll();
}

export function removeTodo(id: string) {
    _.remove(todos, (t: Todo) => t.id === id);
    observable.notifyAll();
}
