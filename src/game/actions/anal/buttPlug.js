import store from "store";
import createNotification, {
  dismissNotification,
} from "engine/createNotification";
import { strokerRemoteControl } from "game/loops/strokeEmitter";

export const insertButtPlug = async () => {
  if (!store.game.buttPlugInserted) {
    strokerRemoteControl.pause();

    const notificationId = createNotification({
      message: "Slowly insert a butt plug",
      duration: -1,
      delay: true,
    });

    const done = async () => {
      strokerRemoteControl.play();
      store.game.buttPlugInserted = true;
      dismissNotification(notificationId);
    };
    done.label = "Inserted";

    return [done];
  }
};
insertButtPlug.label = "Insert Buttplug";

export const removeButtPlug = async () => {
  if (store.game.buttPlugInserted) {
    strokerRemoteControl.pause();

    const notificationId = createNotification({
      message: "Slowly remove the butt plug",
      duration: -1,
      delay: true,
    });

    const done = async () => {
      strokerRemoteControl.play();
      store.game.buttPlugInserted = false;
      dismissNotification(notificationId);
    };
    done.label = "Removed";

    return [done];
  }
};
removeButtPlug.label = "Remove Buttplug";
