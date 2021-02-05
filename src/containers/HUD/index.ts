import { connect } from "react-redux";
import { createNotification } from "common/store/notifications";
import HUDComp from "./HUD";

const HUD = connect(null, {
  createNotification,
})(HUDComp);

export default HUD;
