import "./index.scss";

import App from "./components/App.jsx";
import { Provider } from "react-redux";
import React from "react";

import ReactDOM from "react-dom";

import store from "./redux/store";

const rootElement = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement,
);
