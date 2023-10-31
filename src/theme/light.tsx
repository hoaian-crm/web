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
    placeHolder: {
      color: Colors.grey02,
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
  tableTheme: {
    backgroundColor: Colors.white01,
    primaryText: {
      color: Colors.black00,
    },
    secondaryText: {
      color: Colors.grey03,
    },
    foregroundColor: Colors.purple01,
    borderColor: Colors.grey04,
    trueTheme: {
      backgroundColor: Colors.green01,
      foregroundColor: Colors.green02,
    },
    falseTheme: {
      backgroundColor: Colors.red01,
      foregroundColor: Colors.red02,
    },
    searchBar: {
      backgroundColor: Colors.grey05,
      text: {
        color: Colors.black00,
      },
      placeHolder: {
        color: Colors.grey03,
      },
    },
    pagination: {
      active: {
        backgroundColor: Colors.purple01,
        foregroundColor: Colors.white01,
      },
      inActive: {
        backgroundColor: Colors.grey06,
        foregroundColor: Colors.black03,
      },
      placeHolder: {
        color: Colors.grey03,
      },
    },
  },
};
