import { Theme } from "theme";
import { Colors } from "./color";

export const LightTheme: Theme = {
  primaryButton: {
    backgroundColor: Colors.black01,
    hoverColor: Colors.black01,
    childrenTheme: {
      color: Colors.white01,
    },
  },
  primaryTextTheme: {
    color: Colors.black01,
  },
  inputTheme: {
    backgroundColor: Colors.grey01,
    text: {
      color: Colors.black01,
    },
  },
  backgroundColor: Colors.white02,
  navbarTheme: {
    backgroundColor: Colors.white01,
    headerColor: Colors.black00,
    activeItemTheme: {
      backgroundColor: Colors.purple01,
      contentColor: Colors.white01,
    },
    defaultItemTheme: {
      backgroundColor: Colors.transparent,
      contentColor: Colors.white03,
    },
  },
  primaryTextColor: Colors.black00,
};
