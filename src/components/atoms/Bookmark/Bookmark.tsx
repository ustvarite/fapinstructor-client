import { Typography } from "@material-ui/core";
import React from "react";

export interface BookmarkProps {
  href: string;
  src: string;
}

const Bookmark = ({ href, src }: BookmarkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Typography variant="subtitle1">{src}</Typography>
  </a>
);

export default Bookmark;
