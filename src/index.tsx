import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/index.css";
import { Toaster } from "sonner";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster position="top-right" richColors duration={2000} />
    </Provider>
  </React.StrictMode>
);
