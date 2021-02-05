import React, { FC } from "react";
import { Box } from "@material-ui/core";
import Tag from "components/molecules/Tag";
// import { Tag as ITag } from "api/types";

export interface TagsProps {
  tags: string[];
}

const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <Box display="flex" justifyContent="flex-start">
      {tags.map((tag) => (
        <Box key={tag} mr={1}>
          <Tag tag={tag} />
        </Box>
      ))}
    </Box>
  );
};

export default Tags;
