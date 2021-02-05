import React, { FC, ReactNode, ReactNodeArray } from "react";
import Box from "@material-ui/core/Box";

export interface NodeRowProps {
  children: ReactNodeArray;
}

const NodeRow: FC<NodeRowProps> = ({ children }) => {
  return (
    <Box display="flex">
      {children.map((button: ReactNode, index: number) => (
        <Box key={index} mr={index + 1 < children.length ? 1 : 0}>
          {button}
        </Box>
      ))}
    </Box>
  );
};

export default NodeRow;
