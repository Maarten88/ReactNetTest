/// <reference path="../../typings/index.d.ts" />
 
import * as React from "react";

export interface HelloProps { initialData?: any; compiler: string; framework: string }
export interface HelloState { data: any }

declare var global : any;

export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props);
        this.state = { data: this.props.initialData };
    }
    getFromApi = () => {
        var xhr = new XMLHttpRequest();
        xhr.open('get', '/apicall', true);
        xhr.onload = () => {
            var data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        };
        xhr.send();
    };

    render() {
        var objectsLeaked: number;
        // Make memory leak serverside
        if (typeof(window) === 'undefined') {
            if (!global.leak) {
                global.leak = new Array();
            }

            var fill = new Array();
            for (var j = 0; j < 100000; j++)
                fill.push(j);
            global.leak.push(fill);
            objectsLeaked = global.leak.length;
        } else {
            objectsLeaked = 0;
        }

        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <br/>
                <p>{JSON.stringify(this.state.data) }</p>
                <button onClick={this.getFromApi}>Get Data From API</button>
                <p>(leaked {objectsLeaked} objects)</p>
            </div>;
    } 
}