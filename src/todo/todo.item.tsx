import * as React from "react";

import { Todo } from './todo.interface';

export default class TodoItem extends React.Component<TodoItemProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        let deleteButtonStyle = {
            color: '#ff0000'
        }
        let descriptionStyle = {
            paddingTop: 4,
            cursor: 'pointer'
        }
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <button className="btn btn-link pull-right" style={deleteButtonStyle} onClick={this.props.removeTodo}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button className="btn btn-default pull-right" onClick={this.props.editTodo}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <div className="checkbox pull-left">
                        <label>
                            <input type="checkbox" checked={this.props.done} onClick={this.props.toggleTodo} />
                        </label>
                    </div>
                    <h6 className="noselect" style={descriptionStyle} onClick={this.props.toggleTodo}>{this.props.description}</h6>
                </div>
            </div>
        );
    }

}

interface TodoItemProps {
    key: string;
    description: string;
    done: boolean;
    toggleTodo: React.MouseEventHandler;
    editTodo: React.MouseEventHandler;
    removeTodo: React.MouseEventHandler;
}
