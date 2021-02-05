import React, { FC } from "react";
import TableRow from "@material-ui/core/TableRow";
import SpanningTableCell from "components/molecules/table/SpanningTableCell";
import ErrorMessage, { ErrorMessageProps } from "components/atoms/ErrorMessage";

export type ErrorTableRowProps = ErrorMessageProps;

const ErrorTableRow: FC<ErrorTableRowProps> = ({ message }) => {
  return (
    <TableRow>
      <SpanningTableCell>
        <ErrorMessage message={message} />
      </SpanningTableCell>
    </TableRow>
  );
};

export default ErrorTableRow;
