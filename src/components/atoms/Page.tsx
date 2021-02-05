import React, { FC } from "react";
import { Box, BoxProps } from "@material-ui/core";

export type PageProps = BoxProps;

const Page: FC<PageProps> = ({ children, ...props }) => {
  return (
    <Box m={5} {...props}>
      {children}
    </Box>
  );
};

export default Page;
