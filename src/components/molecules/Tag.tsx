import React, { FC } from "react";
import { Chip } from "@material-ui/core";
// import { Tag as ITag } from "api/types";

export interface TagProps {
  tag: string;
}

const Tag: FC<TagProps> = ({ tag }) => {
  return <Chip key={tag} label={tag} />;
};

export default Tag;
