import store from "store";
import createNotification, {
  dismissNotification,
} from "engine/createNotification";
import { strokerRemoteControl } from "game/loops/strokeEmitter";

export const addClothespin = async () => {
  if (store.game.clothespins < 2) {
    strokerRemoteControl.pause();
    const clothespins = store.game.clothespins + 1;
    const notificationId = createNotification({
      message: "Attach a clothespin to a free nipple",
      duration: -1,
      delay: true,
    });

    const done = async () => {
      strokerRemoteControl.play();
      store.game.clothespins = clothespins;
      dismissNotification(notificationId);
    };
    done.label = "Attached";

    return [done];
  }
};
addClothespin.label = "Add Clothespin";

export const removeClothespin = async () => {
  if (store.game.clothespins > 0) {
    strokerRemoteControl.pause();
    const clothespins = store.game.clothespins - 1;
    const notificationId = createNotification({
      message: "Remove a clothespin",
      duration: -1,
      delay: true,
    });

    const done = async () => {
      strokerRemoteControl.play();
      store.game.clothespins = clothespins;
      dismissNotification(notificationId);
    };
    done.label = "Removed";

    return [done];
  }
};
removeClothespin.label = "Remove Clothespin";
