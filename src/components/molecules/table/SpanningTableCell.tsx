import React, { FC } from "react";
import { TableCell } from "@material-ui/core";

const SpanningTableCell: FC = ({ children }) => {
  return <TableCell colSpan={100}>{children}</TableCell>;
};

export default SpanningTableCell;
