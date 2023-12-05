import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#00adb5",
    colorInfo: "#00adb5",
    colorError: "#ef416d",
    colorSuccess: "#52c41a",
    colorBgBase: "#222831",
    colorTextBase: "#eeeeee",
  },
  components: {
    Layout: {
      headerBg: "transparent",
    },
    Select: {
      optionSelectedColor: "#222831"
    }
  },
};
