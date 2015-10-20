import * as React from "react";

import * as TodoModel from '../todo/todo.model';

import { Todo } from '../todo/todo.interface';

export default class TodoCounter extends React.Component<{}, TodoCounterState> {

    constructor(props) {
        super(props);
        this.state = this._buildState();
    }

    componentDidMount() { TodoModel.observable.addListener(this._onModelUpdate.bind(this)); }
    componentWillUnmount() { TodoModel.observable.removeListener(this._onModelUpdate.bind(this)); }

    _onModelUpdate() {
        this.setState(this._buildState());
    }

    _buildState() {
        return {
            doneTodos: TodoModel.getDoneTodos(),
            pendingTodos: TodoModel.getPendingTodos()
        }
    }

    render() {
        return(
            <ul className="nav navbar-nav navbar-right ">
                <li>
                    <a className="todoCounter"><i className="fa fa-check"></i> <span>{this.state.doneTodos}</span></a>
                </li>
                <li>
                    <a className="todoCounter"><i className="fa fa-square-o"></i> <span>{this.state.pendingTodos}</span></a>
                </li>
            </ul>
        );
    }

}

interface TodoCounterState {
    doneTodos: number;
    pendingTodos: number;
}
