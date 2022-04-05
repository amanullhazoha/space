import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import reducers from "./reducers";

const middleware = [promise, thunk, logger];
let composeEnhancers = compose

if(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
};

export default composeEnhancers(applyMiddleware(...middleware))(createStore)(reducers);
