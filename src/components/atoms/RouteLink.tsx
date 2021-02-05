import React, { FC } from "react";
import MuiLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

export interface RouteButtonProps {
  to: string;
}

const RouteLink: FC<RouteButtonProps> = ({ children, to }) => {
  return (
    <MuiLink color="inherit" component={Link} to={to}>
      {children}
    </MuiLink>
  );
};

export default RouteLink;
