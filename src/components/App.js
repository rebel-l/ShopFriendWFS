import React, { Component } from 'react';
import Facebook from './account/login/Facebook';
import List from './shop/List';
import Editor from './shop/Editor';
import User from "./account/User";
import Notification from "./Notification";

class App extends Component {
    render() {
        return (
            <div>
                <User />
                <Facebook />
                <Editor />
                <List />
                <Notification />
            </div>
        );
    }
}

export default App;
