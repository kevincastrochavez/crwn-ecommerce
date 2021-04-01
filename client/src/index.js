import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { store, persistor } from "./redux/store";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import * as serviceWorker from "./service-worker";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
// serviceWorkerRegistration.unregister();

reportWebVitals();
