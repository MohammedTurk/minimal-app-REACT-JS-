import "./_apis_";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import ThemeConfig from "./theme/index";
// scroll bar
import "simplebar/src/simplebar.css";
// notistack
import NotistackProvider from "./components/NotistackProvider";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
// contexts
import { SettingsProvider } from "./context/SettingsContext";
ReactDOM.render(
  <HelmetProvider>
    <ReduxProvider store={store}>
      <SettingsProvider>
        <BrowserRouter>
          <ThemeConfig>
            <NotistackProvider>
              <App />
            </NotistackProvider>
          </ThemeConfig>
        </BrowserRouter>
      </SettingsProvider>
    </ReduxProvider>
  </HelmetProvider>,
  document.getElementById("root")
);
