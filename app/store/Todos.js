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
const fs_1 = require("fs");
const onemitter_1 = require("onemitter");
const util_1 = require("util");
class Todos {
    constructor() {
        this.todos = onemitter_1.default();
        this.isLoaded = false;
        try {
            this.todos.emit(require(__dirname + "/../../todos.json"));
            this.isLoaded = true;
        }
        catch (e) {
            this.todos.emit([]);
        }
    }
    set(todos) {
        return __awaiter(this, void 0, void 0, function* () {
            return util_1.promisify(fs_1.writeFile)(__dirname + "/../../todos.json", JSON.stringify(todos));
        });
    }
    add(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = this.todos.get() || [];
            todos.push(todo);
            yield this.set(todos);
            this.todos.emit(todos);
        });
    }
}
exports.default = Todos;
