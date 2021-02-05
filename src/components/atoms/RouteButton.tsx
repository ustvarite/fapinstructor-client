import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

export interface RouteButtonProps {
  to: string;
}

const RouteButton: FC<RouteButtonProps> = ({ children, to }) => {
  return (
    <Button color="inherit" component={NavLink} to={to}>
      {children}
    </Button>
  );
};

export default RouteButton;
