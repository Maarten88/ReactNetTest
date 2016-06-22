/// <reference path="../../typings/index.d.ts" />
"use strict";
const React = require("react");
class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.getFromApi = () => {
            var xhr = new XMLHttpRequest();
            xhr.open('get', '/apicall', true);
            xhr.onload = () => {
                var data = JSON.parse(xhr.responseText);
                this.setState({ data: data });
            };
            xhr.send();
        };
        this.state = { data: this.props.initialData };
    }
    render() {
        var objectsLeaked;
        // Make memory leak serverside
        if (typeof (window) === 'undefined') {
            if (!global.leak) {
                global.leak = new Array();
            }
            var fill = new Array();
            for (var j = 0; j < 100000; j++)
                fill.push(j);
            global.leak.push(fill);
            objectsLeaked = global.leak.length;
        }
        else {
            objectsLeaked = 0;
        }
        return React.createElement("div", null, React.createElement("h1", null, "Hello from ", this.props.compiler, " and ", this.props.framework, "!"), React.createElement("br", null), React.createElement("p", null, JSON.stringify(this.state.data)), React.createElement("button", {onClick: this.getFromApi}, "Get Data From API"), React.createElement("p", null, "(leaked ", objectsLeaked, " objects)"));
    }
}
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map