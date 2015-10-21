import * as React from "react";
import * as classNames from 'classnames';

import { Todo } from './todo.interface';

export default class TodoItem extends React.Component<TodoItemProps, TodoComponentState> {

    constructor(props) {
        super(props);
        this.state = {
            isEdited: false
        };
    }

    setDescription(event) {
        this.setState({valid: true, description: event.target.value});
    }

    editTodo() {
        this.setState({
            isEdited: true,
            valid: true,
            description: this.props.description
        });
    }

    cancelEditTodo() {
        this.setState({
            isEdited: false,
            valid: true
        });
    }

    saveTodo() {
        if (!this.state.description.length || this.state.description.length > 25) {
            this.props.editTodo(this.state.description);
            this.setState({ valid: false });
        } else {
            this.props.editTodo(this.state.description);
            this.setState({
                isEdited: false,
                valid: true,
                description: ''
            });
        }
    }

    render() {
        let inputClass = classNames('form-group', {
            'form-group': true,
            'has-error': !this.state.valid
        });
        let deleteButtonStyle = {
            color: '#ff0000',
            marginLeft: 5
        }
        let descriptionStyle = {
            paddingTop: 4,
            cursor: 'pointer'
        }
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-1 col-xs-2 checkbox">
                            <label>
                                <input type="checkbox" readOnly={true} checked={this.props.done} onClick={this.props.toggleTodo} disabled={this.state.isEdited} />
                            </label>
                        </div>
                        <div className="col-sm-6 col-sx-6">
                            {(() => {
                                if (this.state.isEdited) {
                                    return <div className={inputClass} style={{marginBottom: 0}}>
                                        <input className="form-control" type="text" value={this.state.description} onChange={this.setDescription.bind(this)} />
                                    </div>
                                    } else {
                                        return <h6 className="noselect" style={descriptionStyle} onClick={this.props.toggleTodo}>{this.props.description}</h6>
                                    }
                                })()}
                        </div>
                        <div className="col-sm-5 pull-right text-right">
                            {(() => {
                                if (this.state.isEdited) {
                                    return <span>
                                        <button className="btn btn-success" onClick={this.saveTodo.bind(this)}>
                                            <i className="fa fa-check"></i>
                                        </button>
                                        <button className="btn btn-link" style={deleteButtonStyle} onClick={this.cancelEditTodo.bind(this)}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </span>
                                } else {
                                    return <span>
                                        <button className="btn btn-default" onClick={this.editTodo.bind(this)}>
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                        <button className="btn btn-link" style={deleteButtonStyle} onClick={this.props.removeTodo}>
                                            <i className="fa fa-trash-o"></i>
                                        </button>
                                    </span>
                                }
                            })()}
                        </div>
                    </div>
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
    editTodo: any;
    removeTodo: React.MouseEventHandler;
}

interface TodoComponentState {
    isEdited? : boolean
    description?: string;
    valid?: boolean;
}

