import createNotification, {
  dismissNotification,
} from "engine/createNotification";
import { strokerRemoteControl } from "game/loops/strokeEmitter";
import { getRandomInclusiveInteger } from "utils/math";
import delay from "utils/delay";

export const rubIceOnBalls = async () => {
  const time = getRandomInclusiveInteger(10, 50);

  const nid = createNotification({
    message: "Grab an ice cube",
    duration: -1,
    dismissible: false,
    delay: true,
  });

  strokerRemoteControl.pause();

  const done = async () => {
    dismissNotification(nid);

    createNotification({
      message: "Rub the ice cube against your balls",
      duration: time * 1000,
      showProgress: true,
    });
    await delay(time * 1000);

    strokerRemoteControl.play();
    createNotification({ message: "Back to stroking" });

    await delay(3 * 1000);
  };
  done.label = "Grabbed";

  return done;
};

rubIceOnBalls.label = "Ice Balls";
