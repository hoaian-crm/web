import { SvgIconOwnProps } from "@mui/material";

export type IMarker = {
  longitude: numberp;
  latitude: number;
  name: string;
  color?: SvgIconOwnProps.color;
}
