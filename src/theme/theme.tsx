import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#00adb5",
    colorInfo: "#00adb5",
    colorError: "#ef416d",
    colorSuccess: "#52c41a",
    colorBgBase: "#222831",
    colorTextBase: "#eeeeee",
    boxShadow: 'none'
  },
  components: {
    Layout: {
      headerBg: "transparent",
    },
    Select: {
      optionSelectedColor: "#222831"
    },
    Button: {
      primaryShadow: "0 0px 0 rgba(5, 145, 255, 0.1)"
    },
    Table: {
      rowSelectedBg: "#347ccb5e",
      rowSelectedHoverBg: "#347ccb5e"
    }
  },
};
