export * from "./light";

export type ButtonTheme = {
  backgroundColor: string;
  hoverColor: string;
  childrenTheme: TextTheme;
};

export type TextTheme = {
  color: string;
};

export type InputTheme = {
  backgroundColor: string;
  text: TextTheme;
};

export type NavbarTheme = {
  backgroundColor: string;
  headerColor: string;
  defaultItemColor: string;
  activeItemColor: string;
  activeItemBackgroundColor: string;
}

export type Theme = {
  primaryButton: ButtonTheme;
  primaryTextTheme: TextTheme;
  inputTheme: InputTheme;
  backgroundColor: string;
  navbarTheme: NavbarTheme;
};
