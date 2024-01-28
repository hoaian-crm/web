import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#7267f0",
    colorInfo: "#7267f0",
    colorError: "#ef416d",
    colorSuccess: "#52c41a",
  },
  components: {
    Layout: {
      headerBg: "transparent",
      headerHeight: 80,
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
      headerBg: 'white',
      footerBg: 'white',
    },
    Input: {},
    Menu: {
      itemSelectedBg: "rgb(115, 103, 240)",
      itemSelectedColor: "rgb(254, 254, 255)",
      iconSize: 20,
      colorText: 'rgb(109,107,119)',
      fontSize: 15,
      itemMarginInline: 20
    }
  },
};
