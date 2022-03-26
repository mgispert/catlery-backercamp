import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store";
import { catleryTheme } from "./theme";

ReactDOM.render(
  <ChakraProvider theme={catleryTheme}>
    <ColorModeScript initialColorMode={catleryTheme.config.initialColorMode} />
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
