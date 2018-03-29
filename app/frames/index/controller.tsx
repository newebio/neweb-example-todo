import { Controller } from "neweb-core";
import Context from "../../Context";

export default class extends Controller<any, any, Context> {
    public async onInit() {
        this.config.context.todosStore.todos.on((todos) => {
            this.emit({ todos });
        });
    }
    public async getInitialData() {
        const todos = await this.config.context.todosStore.todos.wait();
        return {
            todos,
            title: "Index page",
        };
    }
    public async add(text: string) {
        try {
            await this.config.context.todosStore.add({ text, active: true });
        } catch (e) {
            this.emit({ error: e.toString() });
        }
    }
}
