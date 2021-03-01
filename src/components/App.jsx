import React from "react";

import Notification from "./Notification";
import Spinner from "./Spinner";

import Facebook from "./account/login/Facebook";

import Editor from "./shop/Editor";
import List from "./shop/List";

import User from "./account/User";

function App() {
    return (
        <div>
            <User />

            <Facebook />

            <Editor />

            <List />

            <Notification />

            <Spinner />
        </div>
    );
}

export default App;
