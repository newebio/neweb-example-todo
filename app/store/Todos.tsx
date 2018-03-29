import { writeFile } from "fs";
import o, { Onemitter } from "onemitter";
import { promisify } from "util";
export interface ITodo {
    text: string;
    active: boolean;
}
class Todos {
    public todos: Onemitter<ITodo[]> = o();
    protected isLoaded: boolean = false;
    constructor() {
        try {
            this.todos.emit(require(__dirname + "/../../todos.json"));
            this.isLoaded = true;
        } catch (e) {
            this.todos.emit([]);
        }
    }
    public async set(todos: ITodo[]) {
        return promisify(writeFile)(__dirname + "/../../todos.json", JSON.stringify(todos));
    }
    public async add(todo: ITodo) {
        const todos = this.todos.get() || [];
        todos.push(todo);
        await this.set(todos);
        this.todos.emit(todos);
    }
}
export default Todos;
