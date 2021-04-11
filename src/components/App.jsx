import Editor from "./shop/Editor.jsx";
import List from "./shop/List.jsx";
import Notification from "./Notification.jsx";
import React from "react";
import Spinner from "./Spinner.jsx";
import User from "./account/User.jsx";

function App () {
    return (
        <div>
            <User />

            <Editor />

            <List />

            <Notification />

            <Spinner />
        </div>
    );
}

export default App;
