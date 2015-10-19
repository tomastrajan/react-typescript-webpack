import * as uuid from 'uuid';
import * as model from './todo.model';

import { Todo } from './todo.interface';

export function createTodo(description: string) {
    let todo: Todo = {
        id: uuid.v4(),
        description: description,
        done: false
    };
    model.addTodo(todo);
}

export function toggleTodo(id: string) {
    let todo = model.getTodo(id);
    todo.done = !todo.done;
    model.updateTodo(todo);
}

export function removeTodo(id: string) {
    model.removeTodo(id);
}

export function removeDoneTodos() {
    let todos = model.getTodos();
    _.forEach(todos, t => t.done ? model.removeTodo(t.id) : undefined);
}
