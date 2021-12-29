import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

export function HomeButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Tooltip title="Home" placement="bottom">
      <IconButton color="inherit" onClick={handleClick}>
        <HomeIcon />
      </IconButton>
    </Tooltip>
  );
}
