import React, { FC } from "react";
import { Button, Box, FormHelperText, ButtonProps } from "@material-ui/core";

export interface ButtonWithHelperTextProps extends ButtonProps {
  helperText: string;
}

const ButtonWithHelperText: FC<ButtonWithHelperTextProps> = ({
  helperText,
  ...props
}) => {
  return (
    <Box display="inline-flex" flexDirection="column" alignItems="center">
      <Button {...props}>Share Game</Button>
      <FormHelperText>{helperText}</FormHelperText>
    </Box>
  );
};

export default ButtonWithHelperText;
