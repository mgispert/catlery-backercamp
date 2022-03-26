import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const catleryTheme = extendTheme({
  config,
  styles: {
    global: {
      "body, html, #root": {
        height: "100%",
      },
      "*": {
        fontFamily: "Quicksand",
      },
      body: {
        backgroundColor: "rgb(26 32 44)",
        margin: 0,
      },
    },
  },
});
