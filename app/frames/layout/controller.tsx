import { Controller } from "neweb-core";

export default class extends Controller<any, any, any> {
    public getInitialData() {
        return {
            title: "NewebTodoExample",
        };
    }
}
