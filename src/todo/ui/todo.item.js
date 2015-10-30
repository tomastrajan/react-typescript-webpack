var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var classNames = require('classnames');
var TodoItem = (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem(props) {
        _super.call(this, props);
        this.state = {
            isEdited: false
        };
    }
    TodoItem.prototype.setDescription = function (event) {
        this.setState({ valid: true, description: event.target.value });
    };
    TodoItem.prototype.editTodo = function () {
        this.setState({
            isEdited: true,
            valid: true,
            description: this.props.description
        });
    };
    TodoItem.prototype.cancelEditTodo = function () {
        this.setState({
            isEdited: false,
            valid: true
        });
    };
    TodoItem.prototype.saveTodo = function () {
        if (!this.state.description.length || this.state.description.length > 50) {
            this.props.editTodo(this.state.description);
            this.setState({ valid: false });
        }
        else {
            this.props.editTodo(this.state.description);
            this.setState({
                isEdited: false,
                valid: true,
                description: ''
            });
        }
    };
    TodoItem.prototype.render = function () {
        var _this = this;
        var inputClass = classNames('form-group', {
            'form-group': true,
            'has-error': !this.state.valid
        });
        var deleteButtonStyle = {
            color: '#ff0000',
            marginLeft: 5
        };
        var descriptionStyle = {
            paddingTop: 4,
            cursor: 'pointer'
        };
        return (React.createElement("div", {"className": "panel panel-default"}, React.createElement("div", {"className": "panel-body"}, React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col-sm-1 col-xs-2 checkbox"}, React.createElement("label", null, React.createElement("input", {"type": "checkbox", "readOnly": true, "checked": this.props.done, "onClick": this.props.toggleTodo, "disabled": this.state.isEdited}))), React.createElement("div", {"className": "col-sm-6 col-sx-6"}, (function () {
            if (_this.state.isEdited) {
                return React.createElement("div", {"className": inputClass, "style": { marginBottom: 0 }}, React.createElement("input", {"className": "form-control", "type": "text", "value": _this.state.description, "onChange": _this.setDescription.bind(_this)}));
            }
            else {
                return React.createElement("h6", {"className": "noselect", "style": descriptionStyle, "onClick": _this.props.toggleTodo}, _this.props.description);
            }
        })()), React.createElement("div", {"className": "col-sm-5 pull-right text-right"}, (function () {
            if (_this.state.isEdited) {
                return React.createElement("span", null, React.createElement("button", {"className": "btn btn-success", "onClick": _this.saveTodo.bind(_this)}, React.createElement("i", {"className": "fa fa-check"})), React.createElement("button", {"className": "btn btn-link", "style": deleteButtonStyle, "onClick": _this.cancelEditTodo.bind(_this)}, React.createElement("i", {"className": "fa fa-times"})));
            }
            else {
                return React.createElement("span", null, React.createElement("button", {"className": "btn btn-default", "onClick": _this.editTodo.bind(_this)}, React.createElement("i", {"className": "fa fa-pencil"})), React.createElement("button", {"className": "btn btn-link", "style": deleteButtonStyle, "onClick": _this.props.removeTodo}, React.createElement("i", {"className": "fa fa-trash-o"})));
            }
        })())))));
    };
    return TodoItem;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoItem;
//# sourceMappingURL=todo.item.js.map