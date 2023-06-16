import store from "@/store";
import { createNotification } from "@/game/engine/notification";
import { setStrokeSpeed } from "@/game/utils/strokeSpeed";
import { delay } from "@/game/engine/delay";
import { playCommand } from "@/game/engine/audio";
import { StrokeService } from "@/game/xstate/services";
import { selectSettings } from "@/stores/settings";

export const acceleration = async () => {
  const previousStrokeSpeed = StrokeService.strokeSpeed;

  createNotification({
    message: "Accelerated stroking",
    delay: true,
  });

  setStrokeSpeed(store.config.strokeSpeed.min);

  let audioPlayed = false;
  const settings = selectSettings(store.getState());

  while (StrokeService.strokeSpeed < store.config.strokeSpeed.max) {
    setStrokeSpeed(StrokeService.strokeSpeed * 1.05);
    await delay(1000);

    if (
      !audioPlayed &&
      StrokeService.strokeSpeed > store.config.strokeSpeed.max / 3 &&
      settings.moans
    ) {
      playCommand("longMoan");
      audioPlayed = true;
    }
  }

  setStrokeSpeed(previousStrokeSpeed);
};
acceleration.label = "Acceleration Strokes";
