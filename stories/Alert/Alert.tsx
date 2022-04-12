import React from "react";
import { ColorTypes, SizeTypes } from "../types";
import { StyledAlert } from "./Alert.styled";

export type AlertProps = {
  size?: SizeTypes;
  color?: ColorTypes;
  message: string;
  show: boolean;
};

export default function Alert({ show, message, ...rest }: AlertProps) {
  return show && <StyledAlert {...rest}>{message}</StyledAlert>;
}
