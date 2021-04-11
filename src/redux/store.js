import { applyMiddleware, createStore } from "redux";
import api from "../middleware/api";
import rootReducer from "./reducers";

export default createStore(rootReducer, applyMiddleware(api));
