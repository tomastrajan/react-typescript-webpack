import * as React from 'react';
import { Avatar } from 'material-ui';
import { Button, NavDropdown, MenuItem } from 'react-bootstrap';

import * as AuthModel from './auth.model';
import * as AuthAppService from '../app/auth.app.service';

export default class AuthComponent extends React.Component<{}, AuthState> {

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
        AuthAppService.login();
    }

    logout() {
        AuthAppService.logout();
    }

    render() {
        return ((() => {
            if (this.state.isAuthenticated) {
                return <ul className="nav navbar-nav navbar-right ">
                    <li>
                        <a style={{paddingTop:15,paddingBottom:0,paddingRight:0}}>
                            <Avatar src={this.state.profile.picture} />
                        </a>
                    </li>
                    <NavDropdown title={this.state.profile.name} id="collapsible-navbar-dropdown">
                        <MenuItem onClick={this.logout.bind(this)}>Sing out</MenuItem>
                    </NavDropdown>
                </ul>
            } else {
                return <ul className="nav navbar-nav navbar-right ">
                    <li>
                        <a>Welcome guest!</a>
                    </li>
                    <li>
                        <Button bsStyle="primary" style={{marginTop:14}} onClick={this.login.bind(this)}>Sign in</Button>
                    </li>
                </ul>
            }
        })());
    }

}

interface AuthState {
    isAuthenticated?: boolean;
    profile?: any;
}