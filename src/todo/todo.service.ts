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
