"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class default_1 extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { text: "", loading: false };
    }
    render() {
        return React.createElement("div", null,
            React.createElement("h1", null, "Todos"),
            React.createElement("div", null, this.props.data && this.props.data.error ? this.props.data.error : ""),
            React.createElement("ul", null, this.props.data.todos.map((todo) => {
                return React.createElement("li", null, todo.text);
            })),
            React.createElement("form", { onSubmit: (e) => __awaiter(this, void 0, void 0, function* () {
                    e.preventDefault();
                    this.setState({ loading: true, text: "" });
                    yield this.props.dispatch("add", this.state.text);
                    setTimeout(() => {
                        this.setState({ loading: false });
                    }, 400);
                }) },
                React.createElement("input", { type: "text", value: this.state.text, onChange: (e) => this.setState({ text: e.target.value }) }),
                React.createElement("button", { type: "submit", disabled: this.state.loading }, "Add")),
            React.createElement("div", null, this.state.loading ? "Loading..." : ""));
    }
}
exports.default = default_1;
