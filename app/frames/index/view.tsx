import { IViewProps } from "neweb";
import React = require("react");
import { ITodo } from "../../store/Todos";

export default class extends React.Component<IViewProps<{}, {
    todos: ITodo[];
    error?: string;
}>, {
        loading: boolean;
        text: string;
    }> {
    public state = { text: "", loading: false };
    public render() {
        return <div><h1>Todos</h1>
            <div>{this.props.data && this.props.data.error ? this.props.data.error : ""}</div>
            <ul>{this.props.data.todos.map((todo, i) => {
                return <li key={i}>{todo.text}</li>;
            })}</ul>
            <form onSubmit={async (e) => {
                e.preventDefault();
                this.setState({ loading: true, text: "" });
                await this.props.dispatch("add", this.state.text);
                setTimeout(() => {
                    this.setState({ loading: false });
                }, 400);
            }}><input type="text" value={this.state.text}
                onChange={(e) => this.setState({ text: e.target.value })} />
                <button type="submit" disabled={this.state.loading}>Add</button></form>
            <div>{this.state.loading ? "Loading..." : ""}</div>
        </div>;
    }
}
