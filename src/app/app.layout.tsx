import * as React from "react";
import { Router, Route } from 'react-router';
import { Paper, Avatar } from 'material-ui';

import * as AuthModel from '../auth/auth.model';
import * as AuthService from '../auth/auth.service';

import TodoCounter from '../todo/todo.counter';

export default class App extends React.Component<AppProps, AppState> {

    constructor(props) {
        super(props);
        this.state = this._buildState();
    }

    componentDidMount() { AuthModel.observable.addListener(this._onModelUpdate.bind(this)); }
    componentWillUnmount() { AuthModel.observable.removeListener(this._onModelUpdate.bind(this)); }

    _onModelUpdate() {
        this.setState(this._buildState());
    }

    _buildState() {
        return {
            isAuthenticated: AuthModel.isAuthenticated(),
            profile: AuthModel.getProfile()
        }
    }

    login() {
        AuthService.login();
    }

    logout() {
        AuthService.logout();
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="javascript:void(0)">Todo FluXXX™</a>
                        </div>


                        <ul className="nav navbar-nav navbar-right ">
                            {(() => {
                                if (this.state.isAuthenticated) {
                                    return <li className="dropdown">
                                        <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" style={{paddingTop:15,paddingBottom:0}} onClick={this.logout.bind(this)}>
                                            <Avatar src={this.state.profile.picture} />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="javascript:void(0)" onClick={this.logout.bind(this)}>Logout</a></li>
                                        </ul>
                                    </li>
                                } else {
                                    return <li>
                                        <form className="navbar-form navbar-right" role="login">
                                            <button className="btn btn-default" onClick={this.login.bind(this)}>Login</button>
                                        </form>
                                    </li>
                                }
                            })()}
                        </ul>

                        <TodoCounter />
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
                <footer className="footer">
                    <Paper zDepth={2}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <i className="fa fa-medium fa-lg"></i>
                                    <a href="https://medium.com/@tomastrajan">Medium</a>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <i className="fa fa-github fa-lg"></i>
                                    <a href="https://github.com/tomastrajan">Github</a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <i className="fa fa-twitter fa-lg"></i>
                                    <a href="https://twitter.com/tomastrajan">Twitter</a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <i className="fa fa-stack-overflow fa-lg"></i>
                                    <a href="http://stackoverflow.com/users/2650426/tomastrajan?tab=profile">StackOverflow</a>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text-muted text-center">Tomas Trajan 2015</p>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </footer>
            </div>
        );
    }

}

interface AppProps {
    children: any
}

interface AppState {
    isAuthenticated?: boolean;
    profile?: any;
}