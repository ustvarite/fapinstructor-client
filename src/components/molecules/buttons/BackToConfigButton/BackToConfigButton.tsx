import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const BackToConfigButton = () => {
  const history = useHistory();

  const handleBackToConfig = () => {
    history.push("/");
  };

  return (
    <Button onClick={handleBackToConfig} variant="contained" color="secondary">
      Configure game
    </Button>
  );
};

export default BackToConfigButton;
