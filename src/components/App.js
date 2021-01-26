import React, { Component } from 'react';
import Facebook from './account/login/Facebook';
import List from './shop/List';
import Editor from './shop/Editor';
import User from "./account/User";

class App extends Component {
    render() {
        return (
            <div>
                <User />
                <Facebook />
                <Editor />
                <List />
            </div>
        );
    }
}

export default App;
