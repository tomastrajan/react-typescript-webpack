var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require('./loading.component.css');
var React = require('react');
var material_ui_1 = require('material-ui');
var LoadingInterceptor = require('./loading.interceptor.ts');
var LoadingComponent = (function (_super) {
    __extends(LoadingComponent, _super);
    function LoadingComponent(props) {
        _super.call(this, props);
        this.state = { isLoading: false };
    }
    LoadingComponent.prototype.componentDidMount = function () { LoadingInterceptor.observable.addListener(this._onModelUpdate.bind(this)); };
    LoadingComponent.prototype.componentWillUnmount = function () { LoadingInterceptor.observable.removeListener(this._onModelUpdate.bind(this)); };
    LoadingComponent.prototype._onModelUpdate = function () {
        this.setState({ isLoading: LoadingInterceptor.isLoading() });
    };
    LoadingComponent.prototype.render = function () {
        var _this = this;
        return ((function () {
            if (_this.state.isLoading) {
                return React.createElement("span", null, React.createElement("div", {"className": "loading-overlay"}), React.createElement("div", {"className": "loading"}, React.createElement(material_ui_1.CircularProgress, {"mode": "indeterminate"})));
            }
            else {
                return React.createElement("span", null);
            }
        })());
    };
    return LoadingComponent;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoadingComponent;
//# sourceMappingURL=loading.component.js.map