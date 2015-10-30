import * as React from "react";

import * as TodoModel from '../todo.model.ts';

import { Todo } from '../todo.interface.ts';

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
        let containerStyle = {
            paddingBottom: 0
        };

        let valueStyle = {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
            position: 'relative',
            top: 2
        };

        let iconStyle = {
            marginRight: 5
        };

        return(
            <ul className="nav navbar-nav navbar-right ">
                <li>
                    <a style={containerStyle}>
                        <i className="fa fa-check" style={iconStyle}></i> <span style={valueStyle}>{this.state.doneTodos}</span>
                    </a>
                </li>
                <li>
                    <a style={containerStyle}>
                        <i className="fa fa-square-o"></i> <span style={valueStyle}>{this.state.pendingTodos}</span>
                    </a>
                </li>
            </ul>
        );
    }

}

interface TodoCounterState {
    doneTodos: number;
    pendingTodos: number;
}
