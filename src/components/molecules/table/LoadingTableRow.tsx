import React from "react";
import { TableRow, LinearProgress } from "@material-ui/core";
import SpanningTableCell from "components/molecules/table/SpanningTableCell";

const LoadingTableRow = () => {
  return (
    <TableRow>
      <SpanningTableCell>
        <LinearProgress />
      </SpanningTableCell>
    </TableRow>
  );
};

export default LoadingTableRow;
