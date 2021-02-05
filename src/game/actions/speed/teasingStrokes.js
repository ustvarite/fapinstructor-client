import store from "store";
import createNotification from "engine/createNotification";
import { setStrokeSpeed } from "game/utils/strokeSpeed";
import { getRandomInclusiveInteger } from "utils/math";
import delay from "utils/delay";

const teasingStrokes = async () => {
  const strokeSpeed = store.game.strokeSpeed;
  const totalTime = getRandomInclusiveInteger(15, 40);

  createNotification({
    message: "Now go slow",
    duration: totalTime,
    showProgress: true,
    delay: true,
  });

  setStrokeSpeed(store.config.slowestStrokeSpeed);

  await delay(totalTime * 1000);

  setStrokeSpeed(strokeSpeed);
};
teasingStrokes.label = "Teasing Strokes";

export default teasingStrokes;
