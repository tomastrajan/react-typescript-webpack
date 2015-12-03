const STORAGE_KEY = 'todos';

export function getTodos() {
    let result = localStorage.getItem(STORAGE_KEY);
    return result ? JSON.parse(result) : [];
}

export function setTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
