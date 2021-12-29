import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

export function BackToConfigButton() {
  const navigate = useNavigate();

  const handleBackToConfig = () => {
    navigate("/");
  };

  return (
    <Button onClick={handleBackToConfig} variant="contained" color="secondary">
      Configure game
    </Button>
  );
}
