import React, { Component } from "react";
import AjaxButton from "./AjaxButton";
import Facebook from "./Facebook";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>Have fun playing around</p>
                <AjaxButton />
                <Facebook />
            </div>
        );
    }
}

export default App;
