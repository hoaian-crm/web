import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#5932ea",
    colorInfo: "#5932ea",
    // colorTextBase: "#5c5a68",
  },
  components: {
    Layout: {
      headerBg: "transparent",
    },
    Select: {
      optionSelectedColor: "#222831",
    },
    Button: {
      primaryShadow: "0 0px 0 rgba(5, 145, 255, 0.1)",
    },
    Table: {
      rowSelectedBg: "#347ccb5e",
      rowSelectedHoverBg: "#347ccb5e",
    },
    Input: {},
  },
};
