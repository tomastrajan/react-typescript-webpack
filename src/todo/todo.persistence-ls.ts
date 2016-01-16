import { Todo } from './todo.interface';

const STORAGE_KEY: string = 'todos';

export function getTodos() {
    let result: string = localStorage.getItem(STORAGE_KEY);
    return result ? JSON.parse(result) : [];
}

export function setTodos(todos: Todo[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
