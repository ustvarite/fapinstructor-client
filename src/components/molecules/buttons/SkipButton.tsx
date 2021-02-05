import React, { FC } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import SkipNextIcon from "@material-ui/icons/SkipNext";

export interface SkipButtonProps {
  onClick: () => void;
}

const SkipButton: FC<SkipButtonProps> = ({ onClick }) => {
  return (
    <Tooltip title="Skip" placement="bottom">
      <IconButton color="inherit" onClick={onClick}>
        <SkipNextIcon />
      </IconButton>
    </Tooltip>
  );
};

export default SkipButton;
