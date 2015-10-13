import * as React from "react";
// import * as ReactDOM from 'react-dom';

import * as TodoModel from './todo/todo.model';
import * as TodoService from './todo/todo.service';

import { Todo } from './todo/todo.interface';

interface TestProps extends React.Props<any> {
    name: string;
}

function getState() {
    return {
        todos: TodoModel.getTodos()
    };
}

class TestComponent extends React.Component<TestProps, {}> {

    state: any;
    
    constructor(props) {
        super(props);
        this.state = getState();
    }

    componentDidMount() {
        TodoModel.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        TodoModel.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return(
            <div>
                Hello, {this.props.name}
                ---
                <ul>
                {this.state.todos.map(function (todo) {
                    return <li>{todo.description}</li>;
                })}
                </ul>
                <button onClick={this._handleAddTodo.bind(this, 'test')}>Add Todo</button>
            </div>
        );
    }

    _handleAddTodo(description: string) {
        TodoService.createTodo(description);
    }

    _onChange() {
        this.setState(getState());
        console.log('_onChange', this.state);
    }

}

let node = document.getElementById('content');
React.render(<TestComponent name="Tomas" />, node);
