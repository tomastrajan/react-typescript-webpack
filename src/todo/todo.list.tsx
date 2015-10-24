import * as React from "react";

import TodoItem from './todo.item';

import { Todo } from './todo.interface';

export default class TodoList extends React.Component<TodoListProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.todos.map((todo) => {
                    return <TodoItem key={todo.id}
                                     description={todo.description}
                                     done={todo.done}
                                     toggleTodo={this.props.toggleTodo.bind(this, todo.id)}
                                     editTodo={this.props.editTodo.bind(this, todo.id)}
                                     removeTodo={this.props.removeTodo.bind(this, todo.id)}
                           />;
                })}
                {(() => {
                    if (!this.props.todos.length) {
                        return <p className="text-center" style={{paddingTop:50}}>No todos added yet...</p>
                    }
                })()}
            </div>
        );
    }

}

interface TodoListProps {
    todos: Todo[];
    toggleTodo: React.MouseEventHandler;
    editTodo: React.MouseEventHandler;
    removeTodo: React.MouseEventHandler;
}
