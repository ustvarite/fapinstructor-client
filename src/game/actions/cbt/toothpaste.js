import createNotification, {
  dismissNotification,
} from "engine/createNotification";
import { strokerRemoteControl } from "game/loops/strokeEmitter";

const applyToothpaste = async () => {
  strokerRemoteControl.pause();
  const notificationId = createNotification({
    message: "Apply a dime sized spot of toothpaste to the head of your cock",
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
applyToothpaste.label = "Apply Toothpaste";

export default applyToothpaste;
