import React, { FC } from "react";
import ChangeLogImage from "@material-ui/icons/FormatListBulleted";
import Icon, { IconProps } from "components/atoms/Icon";

const ChangeLogIcon: FC<IconProps> = ({ size }) => {
  return (
    <Icon size={size}>
      <ChangeLogImage
        style={{ color: "black", width: "100%", height: "100%" }}
      />
    </Icon>
  );
};

export default ChangeLogIcon;
