import Editor from "./shop/Editor.jsx";
import Facebook from "./account/login/Facebook.jsx";
import List from "./shop/List.jsx";
import Notification from "./Notification.jsx";
import React from "react";
import Spinner from "./Spinner.jsx";
import User from "./account/User.jsx";

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
