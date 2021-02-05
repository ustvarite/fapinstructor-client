import React, { FC } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";

export interface BookmarkButtonProps {
  onClick: () => void;
}

const BookmarkButton: FC<BookmarkButtonProps> = ({ onClick }) => {
  return (
    <Tooltip title="Bookmark" placement="bottom">
      <IconButton color="inherit" onClick={onClick}>
        <BookmarkIcon />
      </IconButton>
    </Tooltip>
  );
};

export default BookmarkButton;
