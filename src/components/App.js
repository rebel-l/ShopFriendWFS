'use strict';

import React, { Component } from "react";
import Facebook from "./Facebook";
import List from "./shop/list/List";
import AddItem from "./shop/add/AddItem";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>Have fun playing around</p>
                <Facebook />
                <AddItem />
                <List />
            </div>
        );
    }
}

export default App;
