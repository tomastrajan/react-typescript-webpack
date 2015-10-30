var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var material_ui_1 = require('material-ui');
var react_bootstrap_1 = require('react-bootstrap');
var AuthModel = require('./../auth.model.ts');
var AuthAppService = require('../../app/auth.app.service.ts');
var AuthComponent = (function (_super) {
    __extends(AuthComponent, _super);
    function AuthComponent(props) {
        _super.call(this, props);
        this.state = this._buildState();
    }
    AuthComponent.prototype.componentDidMount = function () { AuthModel.observable.addListener(this._onModelUpdate.bind(this)); };
    AuthComponent.prototype.componentWillUnmount = function () { AuthModel.observable.removeListener(this._onModelUpdate.bind(this)); };
    AuthComponent.prototype._onModelUpdate = function () {
        this.setState(this._buildState());
    };
    AuthComponent.prototype._buildState = function () {
        return {
            isAuthenticated: AuthModel.isAuthenticated(),
            profile: AuthModel.getProfile()
        };
    };
    AuthComponent.prototype.login = function () {
        AuthAppService.login();
    };
    AuthComponent.prototype.logout = function () {
        AuthAppService.logout();
    };
    AuthComponent.prototype.render = function () {
        var _this = this;
        return ((function () {
            if (_this.state.isAuthenticated) {
                return React.createElement("ul", {"className": "nav navbar-nav navbar-right "}, React.createElement("li", null, React.createElement("a", {"style": { paddingTop: 15, paddingBottom: 0, paddingRight: 0 }}, React.createElement(material_ui_1.Avatar, {"src": _this.state.profile.picture}))), React.createElement(react_bootstrap_1.NavDropdown, {"title": _this.state.profile.name, "id": "collapsible-navbar-dropdown"}, React.createElement(react_bootstrap_1.MenuItem, {"onClick": _this.logout.bind(_this)}, "Sing out")));
            }
            else {
                return React.createElement("ul", {"className": "nav navbar-nav navbar-right "}, React.createElement("li", null, React.createElement("a", null, "Welcome guest!")), React.createElement("li", null, React.createElement(react_bootstrap_1.Button, {"bsStyle": "primary", "style": { marginTop: 14 }, "onClick": _this.login.bind(_this)}, "Sign in")));
            }
        })());
    };
    return AuthComponent;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthComponent;
//# sourceMappingURL=auth.component.js.map