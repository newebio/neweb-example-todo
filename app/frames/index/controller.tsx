import { FrameController } from "neweb";
import Context from "../../Context";

export default class extends FrameController<any, any, Context> {
    public async onInit() {
        this.config.context.todosStore.todos.on((todos) => {
            this.emit({ todos });
        });
    }
    public async getInitialData() {
        const todos = await this.config.context.todosStore.todos.wait();
        return {
            todos,
            title: "Todo list",
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
