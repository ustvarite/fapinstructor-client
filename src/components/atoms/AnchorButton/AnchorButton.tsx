import React, { FC } from "react";
import Button from "@material-ui/core/Button";

export interface AnchorButtonProps {
  href: string;
}

const AnchorButton: FC<AnchorButtonProps> = ({ children, href }) => {
  return (
    <Button target="_blank" color="inherit" href={href}>
      {children}
    </Button>
  );
};

export default AnchorButton;
