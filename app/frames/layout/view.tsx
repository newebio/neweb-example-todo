import { IViewProps } from "neweb-core";
import React = require("react");

export default class extends React.Component<IViewProps<any, any>, {}> {
    public render() {
        return <div>
            <div></div>
            {this.props.children}</div>;
    }
}
