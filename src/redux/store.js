import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import api from "../middleware/api";

export default createStore(rootReducer, applyMiddleware(api));
