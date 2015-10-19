import * as React from 'react';
import * as classNames from 'classnames';

import TodoList from './todo.list';

import { Todo } from './todo.interface';

export default class TodoComponent extends React.Component<TodoComponentProps, TodoComponentState> {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            valid: true
        };
    }

    setDescription(event) {
        this.setState({valid: true, description: event.target.value});
    }

    addTodo() {
        if (!this.state.description.length || this.state.description.length > 15) {
            this.setState({valid: false});
        } else {
            this.props.addTodo(this.state.description);
            this.setState({description: ''});
        }
    }

    render() {
        let inputClass = classNames('form-group', {
            'has-error': !this.state.valid
        });

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">What do you need to do?</h2>
                        <br />
                        <br />
                    </div>
                    <div className="col-md-6 col-md-offset-3">
                        <div className={inputClass}>
                            <label className="control-label">Task description</label>
                            <input className="form-control input-lg" type="text" value={this.state.description} onChange={this.setDescription.bind(this)} />
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-3">
                        <button className="btn btn-success btn-block" onClick={this.addTodo.bind(this)}>
                            <i className="fa fa-plus"></i> Add Todo
                        </button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-danger btn-block" onClick={this.props.removeDoneTodos.bind(this)}>
                            <i className="fa fa-trash-o"></i> Remove done todos
                        </button>
                    </div>
                </div>

                <br />
                <br />

                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <TodoList {...this.props} />
                    </div>
                </div>
            </div>
        );
    }

}

interface TodoComponentProps {
    todos: Todo[];
    addTodo(description: string): void;
    toggleTodo: React.MouseEventHandler;
    editTodo: React.MouseEventHandler;
    removeTodo: React.MouseEventHandler;
    removeDoneTodos: React.MouseEventHandler;
}


interface TodoComponentState {
    description?: string;
    valid?: boolean;
}
