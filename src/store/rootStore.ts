import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers/reducer";

const composeEnhancers = __DEV__ ? 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
  : compose;

const rootStore = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default rootStore;