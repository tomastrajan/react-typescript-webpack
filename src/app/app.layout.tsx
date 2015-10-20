import * as React from "react";
import { Router, Route } from 'react-router';

export default class App extends React.Component<AppProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Todo FluXXX™</a>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

interface AppProps {
    children: any
}