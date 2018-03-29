import Todos from "./store/Todos";

class Context {
    public todosStore: Todos;
    constructor() {
        this.todosStore = new Todos();
    }
}
export default Context;
