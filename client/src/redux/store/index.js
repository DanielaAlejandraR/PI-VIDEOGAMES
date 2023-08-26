import {createStore, applyMiddleware } from "redux";
import {composeWidthDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";//manejamos asincronia
import rootReducer from "../reducer";


export const store = createStore(rootReducer, composeWidthDevTools(applyMiddleware(thunk)));

