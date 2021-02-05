import React, { FC } from "react";
import moment from "moment";
import { TableCell, TableCellProps, Typography } from "@material-ui/core";

export interface DateColumnProps extends TableCellProps {
  date: Date;
  format: string;
}

const DateColumn: FC<DateColumnProps> = ({ date, format, ...props }) => {
  return (
    <TableCell {...props}>
      <Typography noWrap>{moment(date).format(format)}</Typography>
    </TableCell>
  );
};

export default DateColumn;
