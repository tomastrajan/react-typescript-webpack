var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var todo_item_tsx_1 = require('./todo.item.tsx');
var TodoList = (function (_super) {
    __extends(TodoList, _super);
    function TodoList(props) {
        _super.call(this, props);
    }
    TodoList.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, this.props.todos.map(function (todo) {
            return React.createElement(todo_item_tsx_1.default, {"key": todo.id, "description": todo.description, "done": todo.done, "toggleTodo": _this.props.toggleTodo.bind(_this, todo.id), "editTodo": _this.props.editTodo.bind(_this, todo.id), "removeTodo": _this.props.removeTodo.bind(_this, todo.id)});
        }), (function () {
            if (!_this.props.todos.length) {
                return React.createElement("p", {"className": "text-center", "style": { paddingTop: 50 }}, "No todos added yet...");
            }
        })()));
    };
    return TodoList;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoList;
//# sourceMappingURL=todo.list.js.map