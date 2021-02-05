import React, { FC } from "react";
import Box from "@material-ui/core/Box";

export interface IconProps {
  size: number;
}

const Icon: FC<IconProps> = ({ size, children }) => {
  return (
    <Box width={size} height={size}>
      {children}
    </Box>
  );
};

export default Icon;
