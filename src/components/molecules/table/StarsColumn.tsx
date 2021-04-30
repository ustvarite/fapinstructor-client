import React from "react";
import { TableCell, TableCellProps } from "@material-ui/core";
import StarButton, {
  StarButtonProps,
} from "components/molecules/buttons/StarButton";

export type StarsColumnProps = TableCellProps & StarButtonProps;

export default function StarsColumn({
  gameId,
  stars,
  starred,
  ...props
}: StarsColumnProps) {
  return (
    <TableCell {...props}>
      <StarButton gameId={gameId} stars={stars} starred={starred} />
    </TableCell>
  );
}
