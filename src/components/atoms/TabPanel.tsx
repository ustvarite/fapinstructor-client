import React, { FC } from "react";
import { Box } from "@material-ui/core";

interface TabPanelProps {
  index: number;
  value: number;
}

const TabPanel: FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
