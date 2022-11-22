import React from "react";
import ReactDOM from "react-dom/client";

import store from "../src/stateManagement/redux/store";
import { Provider } from "react-redux";
import Login from "./pages/auth/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
