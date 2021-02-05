import createNotification, {
  dismissNotification,
} from "engine/createNotification";
import { strokerRemoteControl } from "game/loops/strokeEmitter";

export const scratchChest = async () => {
  strokerRemoteControl.pause();

  const notificationId = createNotification({
    message: "Scratch your chest with your fingernails",
    duration: -1,
    delay: true,
  });

  const done = async () => {
    strokerRemoteControl.play();
    dismissNotification(notificationId);
  };
  done.label = "Scratched";

  return [done];
};
scratchChest.label = "Scratch Chest";

export const scratchThighs = async () => {
  strokerRemoteControl.pause();

  const notificationId = createNotification({
    message: "Scratch your thighs with your fingernails",
    duration: -1,
    delay: true,
  });

  const done = async () => {
    strokerRemoteControl.play();
    dismissNotification(notificationId);
  };
  done.label = "Scratched";

  return [done];
};
scratchThighs.label = "Scratch Thighs";

export const scratchShoulders = async () => {
  strokerRemoteControl.pause();

  const notificationId = createNotification({
    message: "Scratch your shoulders with your fingernails",
    duration: -1,
    delay: true,
  });

  const done = async () => {
    strokerRemoteControl.play();
    dismissNotification(notificationId);
  };
  done.label = "Scratched";

  return [done];
};
scratchShoulders.label = "Scratch Shoulders";
