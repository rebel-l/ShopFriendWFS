import Editor from "./shop/Editor";
import Facebook from "./account/login/Facebook";
import List from "./shop/List";
import Notification from "./Notification";
import React from "react";
import Spinner from "./Spinner";
import User from "./account/User";

function App () {
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
