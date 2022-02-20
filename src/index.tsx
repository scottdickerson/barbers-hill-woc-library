import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
