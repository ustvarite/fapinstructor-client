import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";

export interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Typography variant="subtitle2" color="secondary">
      {message}
    </Typography>
  );
};

export default ErrorMessage;
