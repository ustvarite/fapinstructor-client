import React, { FC } from "react";
import SearchImage from "@material-ui/icons/Search";
import Icon, { IconProps } from "components/atoms/Icon";

const SearchIcon: FC<IconProps> = ({ size }) => {
  return (
    <Icon size={size}>
      <SearchImage style={{ color: "black", width: "100%", height: "100%" }} />
    </Icon>
  );
};

export default SearchIcon;
