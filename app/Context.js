"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Todos_1 = require("./store/Todos");
class Context {
    constructor() {
        this.todosStore = new Todos_1.default();
    }
}
exports.default = Context;
