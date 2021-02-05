import store from "store";
import createNotification, {
  dismissNotification,
} from "engine/createNotification";
import { strokerRemoteControl } from "game/loops/strokeEmitter";
import play from "engine/audio";
import { getRandomAudioVariation } from "audio";

const eatPrecum = async () => {
  strokerRemoteControl.pause();
  const notificationId = createNotification({
    message: "Squeeze your cock and eat up all of your precum",
    duration: -1,
    delay: true,
  });

  if (store.enableVoice) {
    play(getRandomAudioVariation("CEI"));
  }

  const done = async () => {
    strokerRemoteControl.play();
    dismissNotification(notificationId);
  };
  done.label = "Swallowed";

  return [done];
};
eatPrecum.label = "Eat Precum";

export default eatPrecum;
