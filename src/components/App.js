import React, { Component } from "react";
import Facebook from "./Facebook";
import ListElement from "./shop/list-element/ListElement";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>Have fun playing around</p>
                <Facebook />
                <ListElement />
            </div>
        );
    }
}

export default App;
