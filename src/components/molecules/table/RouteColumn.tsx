import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { TableCell, Link, TableCellProps, Typography } from "@material-ui/core";

export interface RouteColumnProps extends TableCellProps {
  to: string;
  title: string;
}

const RouteColumn: FC<RouteColumnProps> = ({ to, title, ...props }) => {
  return (
    <TableCell {...props} component="th" scope="row">
      <Link component={RouterLink} to={to}>
        <Typography noWrap>{title}</Typography>
      </Link>
    </TableCell>
  );
};

export default RouteColumn;
