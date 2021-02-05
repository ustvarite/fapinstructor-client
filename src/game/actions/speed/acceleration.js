import store from "store";
import { setStrokeSpeed } from "game/utils/strokeSpeed";
import delay from "utils/delay";
import play from "engine/audio";
import audioLibrary from "audio";

const acceleration = async () => {
  const {
    config: { slowestStrokeSpeed, fastestStrokeSpeed },
    enableVoice,
  } = store;
  const strokeSpeed = store.game.strokeSpeed;

  setStrokeSpeed(slowestStrokeSpeed);

  let audioPlayed = false;

  while (store.game.strokeSpeed < fastestStrokeSpeed) {
    setStrokeSpeed(store.game.strokeSpeed * 1.05);
    await delay(1000);

    if (!audioPlayed && store.game.strokeSpeed > fastestStrokeSpeed / 3) {
      if (enableVoice) {
        play(audioLibrary.LongMoan);
      }
      audioPlayed = true;
    }
  }

  setStrokeSpeed(strokeSpeed);
};
acceleration.label = "Acceleration Strokes";

export default acceleration;
