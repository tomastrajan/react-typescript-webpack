var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var TestComponent = (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent() {
        _super.apply(this, arguments);
    }
    TestComponent.prototype.render = function () {
        return (React.createElement("div", null, "Hello, ", this.props.name));
    };
    return TestComponent;
})(React.Component);
var node = document.getElementById('content');
React.render(React.createElement(TestComponent, {"name": "Tomas"}), node);
//# sourceMappingURL=main.js.map