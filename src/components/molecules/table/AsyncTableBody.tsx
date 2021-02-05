import React, { FC } from "react";
import TableBody from "@material-ui/core/TableBody";
import LoadingTableRow from "components/molecules/table/LoadingTableRow";
import ErrorTableRow from "components/molecules/table/ErrorTableRow";

export interface AsyncTableBodyProps {
  loading: boolean;
  error?: string;
}

const AsyncTableBody: FC<AsyncTableBodyProps> = ({
  loading,
  error,
  children,
}) => {
  return (
    <TableBody>
      {loading && <LoadingTableRow />}
      {error && <ErrorTableRow message={error} />}
      {children}
    </TableBody>
  );
};

export default AsyncTableBody;
