'use strict';

import React, { Component } from 'react';
import Facebook from './Facebook';
import List from './shop/List';
import Editor from './shop/Editor';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>Have fun playing around</p>
                <Facebook />
                <Editor />
                <List />
            </div>
        );
    }
}

export default App;
