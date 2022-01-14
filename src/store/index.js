import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [];

const store = createStore(
  rootReducer,
  // composeWithDevTools() pour ReduxDevtools goole Chrome
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
