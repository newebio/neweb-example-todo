import { FrameController } from "neweb";

export default class extends FrameController<any, any, any> {
    public getInitialData() {
        return {
            title: "NewebTodoExample",
        };
    }
}
