var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var todo_list_tsx_1 = require('./todo.list.tsx');
var TodoComponent = (function (_super) {
    __extends(TodoComponent, _super);
    function TodoComponent(props) {
        _super.call(this, props);
        this.state = {
            description: '',
            valid: true
        };
    }
    TodoComponent.prototype.setDescription = function (event) {
        this.setState({ valid: true, description: event.target.value });
    };
    TodoComponent.prototype.addTodo = function () {
        if (!this.state.description.length || this.state.description.length > 50) {
            this.setState({ valid: false });
        }
        else {
            this.props.addTodo(this.state.description);
            this.setState({ description: '' });
        }
    };
    TodoComponent.prototype.render = function () {
        var inputClass = classNames('form-group', {
            'has-error': !this.state.valid
        });
        return (React.createElement("div", {"className": "container"}, React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col-sm-12"}, React.createElement("h2", {"className": "text-center"}, "What do you need to do?"), React.createElement("br", null), React.createElement("br", null)), React.createElement("div", {"className": "col-sm-6 col-sm-offset-3"}, React.createElement("div", {"className": inputClass}, React.createElement("label", {"className": "control-label"}, "Task description"), React.createElement("input", {"className": "form-control input-lg", "type": "text", "value": this.state.description, "onChange": this.setDescription.bind(this)}))), React.createElement("div", {"className": "col-sm-3 col-sm-offset-3"}, React.createElement("button", {"className": "btn btn-success btn-block", "onClick": this.addTodo.bind(this)}, React.createElement("i", {"className": "fa fa-plus"}), " Add Todo")), React.createElement("div", {"className": "col-sm-3"}, React.createElement("button", {"className": "btn btn-danger btn-block", "onClick": this.props.removeDoneTodos.bind(this)}, React.createElement("i", {"className": "fa fa-trash-o"}), " Remove done todos"))), React.createElement("br", null), React.createElement("br", null), React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col-sm-6 col-sm-offset-3"}, React.createElement(todo_list_tsx_1.default, React.__spread({}, this.props))))));
    };
    return TodoComponent;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoComponent;
//# sourceMappingURL=todo.component.js.map