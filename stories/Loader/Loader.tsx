import React from "react";
import { StyledLoader } from "./Loader.styled";

export type Props = {
  show: boolean;
};

function Loader({ show }: Props) {
  return show && <StyledLoader />;
}

export default Loader;
