import React, { FC } from "react";
import { TableCell, TableCellProps } from "@material-ui/core";
import Tags, { TagsProps } from "components/molecules/Tags";

export interface TagsColumnProps extends TagsProps, TableCellProps {}

const TagsColumn: FC<TagsColumnProps> = ({ tags, ...props }) => {
  return (
    <TableCell {...props}>
      <Tags tags={tags} />
    </TableCell>
  );
};

export default TagsColumn;
