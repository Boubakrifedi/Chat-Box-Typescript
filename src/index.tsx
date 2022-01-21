import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App";
import { Provider } from "react-redux";
import ourStore from "./store";

ReactDOM.render(
  <Provider store={ourStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
