import createNotification, {
  dismissNotification,
} from "engine/createNotification";
import { strokerRemoteControl } from "game/loops/strokeEmitter";

const applyIcyHot = async () => {
  strokerRemoteControl.pause();
  const notificationId = createNotification({
    message: "Apply a dime sized spot of icyhot to your cock",
    duration: -1,
    delay: true,
  });

  const done = async () => {
    strokerRemoteControl.play();
    dismissNotification(notificationId);
  };
  done.label = "Applied";

  return [done];
};
applyIcyHot.label = "Apply Icyhot";

export default applyIcyHot;
