var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var TodoModel = require('../todo.model.ts');
var TodoCounter = (function (_super) {
    __extends(TodoCounter, _super);
    function TodoCounter(props) {
        _super.call(this, props);
        this.state = this._buildState();
    }
    TodoCounter.prototype.componentDidMount = function () { TodoModel.observable.addListener(this._onModelUpdate.bind(this)); };
    TodoCounter.prototype.componentWillUnmount = function () { TodoModel.observable.removeListener(this._onModelUpdate.bind(this)); };
    TodoCounter.prototype._onModelUpdate = function () {
        this.setState(this._buildState());
    };
    TodoCounter.prototype._buildState = function () {
        return {
            doneTodos: TodoModel.getDoneTodos(),
            pendingTodos: TodoModel.getPendingTodos()
        };
    };
    TodoCounter.prototype.render = function () {
        var containerStyle = {
            paddingBottom: 0
        };
        var valueStyle = {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
            position: 'relative',
            top: 2
        };
        var iconStyle = {
            marginRight: 5
        };
        return (React.createElement("ul", {"className": "nav navbar-nav navbar-right "}, React.createElement("li", null, React.createElement("a", {"style": containerStyle}, React.createElement("i", {"className": "fa fa-check", "style": iconStyle}), " ", React.createElement("span", {"style": valueStyle}, this.state.doneTodos))), React.createElement("li", null, React.createElement("a", {"style": containerStyle}, React.createElement("i", {"className": "fa fa-square-o"}), " ", React.createElement("span", {"style": valueStyle}, this.state.pendingTodos)))));
    };
    return TodoCounter;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoCounter;
//# sourceMappingURL=todo.counter.js.map