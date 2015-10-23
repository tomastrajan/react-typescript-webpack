import * as React from 'react';
import { Link } from 'react-router';
import { Paper } from 'material-ui';

import AuthComponent from '../auth/auth.component';
import TodoCounter from '../todo/todo.counter';

export default class App extends React.Component<AppProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">
                            <Link  className="navbar-brand" to="/">Todo FluXXX™</Link>
                        </div>

                        <ul className="nav navbar-nav">
                            <li><Link to="/todo">Todo</Link></li>
                        </ul>
                        <AuthComponent />
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