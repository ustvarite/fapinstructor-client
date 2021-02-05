import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import Group from "components/molecules/Group";

export interface ErrorCardProps {
  error: string;
}

const ErrorCard: FC<ErrorCardProps> = ({ error }) => {
  return (
    <Group title="An error has occured">
      <Typography variant="body1">{error}</Typography>
    </Group>
  );
};

export default ErrorCard;
