import React, { ReactNode, FC } from "react";
import Box from "@material-ui/core/Box";

export interface MenuItemProps {
  icon: ReactNode;
  title: ReactNode;
  smallTitle?: ReactNode;
}

const MenuItem: FC<MenuItemProps> = ({ icon, title, smallTitle }) => {
  return (
    <Box display="flex" alignItems="center">
      {icon}
      <Box display={{ xs: "none", md: "block" }} ml={1} whiteSpace="noWrap">
        {title}
      </Box>
      <Box display={{ sm: "block", md: "none" }} ml={1}>
        {smallTitle}
      </Box>
    </Box>
  );
};

export default MenuItem;
