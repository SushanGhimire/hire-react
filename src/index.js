import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/tailwind.css";
import "./assets/css/loder.css";
import App from "./components/App";

store.subscribe(() => store.getState());
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
