var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var todo_component_tsx_1 = require('./todo.component.tsx');
var TodoModel = require('./../todo.model.ts');
var TodoService = require('./../todo.service.ts');
var TodoContainer = (function (_super) {
    __extends(TodoContainer, _super);
    function TodoContainer(props) {
        _super.call(this, props);
        this.state = this._buildState();
    }
    TodoContainer.prototype.componentDidMount = function () { TodoModel.observable.addListener(this._onModelUpdate.bind(this)); };
    TodoContainer.prototype.componentWillUnmount = function () { TodoModel.observable.removeListener(this._onModelUpdate.bind(this)); };
    TodoContainer.prototype._onModelUpdate = function () {
        this.setState(this._buildState());
    };
    TodoContainer.prototype._buildState = function () {
        return {
            todos: TodoModel.getTodos()
        };
    };
    TodoContainer.prototype.addTodo = function (description) {
        TodoService.createTodo(description);
    };
    TodoContainer.prototype.toggleTodo = function (id) {
        TodoService.toggleTodo(id);
    };
    TodoContainer.prototype.editTodo = function (id, description) {
        TodoService.editTodo(id, description);
    };
    TodoContainer.prototype.removeTodo = function (id) {
        TodoService.removeTodo(id);
    };
    TodoContainer.prototype.removeDoneTodos = function () {
        TodoService.removeDoneTodos();
    };
    TodoContainer.prototype.render = function () {
        return (React.createElement(todo_component_tsx_1.default, {"todos": this.state.todos, "addTodo": this.addTodo.bind(this), "toggleTodo": this.toggleTodo.bind(this), "editTodo": this.editTodo.bind(this), "removeTodo": this.removeTodo.bind(this), "removeDoneTodos": this.removeDoneTodos.bind(this)}));
    };
    return TodoContainer;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoContainer;
//# sourceMappingURL=todo.container.js.map