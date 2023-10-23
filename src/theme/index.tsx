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
  placeHolder: TextTheme;
};

export type NavbarTheme = {
  backgroundColor: string;
  headerColor: string;
  activeItemTheme: NavItemTheme;
  defaultItemTheme: NavItemTheme;
};

export type NavItemTheme = {
  backgroundColor: string;
  contentColor: string;
};

export type TableTheme = {
  backgroundColor: string;
  primaryText: TextTheme;
  secondaryText: TextTheme;
  foregroundColor: string;
  borderColor: string;
  trueTheme: BooleanTheme;
  falseTheme: BooleanTheme;
  searchBar: InputTheme;
};

export type BooleanTheme = {
  backgroundColor: string;
  foregroundColor: string;
};

export type Theme = {
  primaryButton: ButtonTheme;
  primaryTextTheme: TextTheme;
  inputTheme: InputTheme;
  backgroundColor: string;
  navbarTheme: NavbarTheme;
  primaryTextColor: string;
  tableTheme: TableTheme;
};
