// Styles
import 'bootswatch/paper/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import TodoItem from './todo/todo.item';

import * as TodoModel from './todo/todo.model';
import * as TodoService from './todo/todo.service';

import { Todo } from './todo/todo.interface';

function getState() {
    return {
        todos: TodoModel.getTodos()
    };
}

class App extends React.Component<{}, {}> {

    state: any;

    constructor(props) {
        super(props);
        this.state = getState();
    }

    componentDidMount() { TodoModel.observable.addListener(this._onChange.bind(this)); }
    componentWillUnmount() { TodoModel.observable.removeListener(this._onChange.bind(this)); }

    _handleAddTodo(description: string) {
        TodoService.createTodo(description);
    }

    _onChange() {
        this.setState(getState());
        console.log('_onChange', this.state);
    }

    _editTodo(todo: Todo) {
        console.log('edit', todo);
    }

    _removeTodo(todo: Todo) {
        TodoService.removeTodo(todo);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        Todos WOW ! <button onClick={this._handleAddTodo.bind(this, 'test')}>Add Todo</button>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            {this.state.todos.map((todo) => {
                                return <TodoItem key={todo.id}
                                                 description={todo.description}
                                                 editTodo={this._editTodo.bind(this, todo)}
                                                 removeTodo={this._removeTodo.bind(this, todo)}
                                       />;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
        </Route>
    </Router>
), document.getElementById('content'));
