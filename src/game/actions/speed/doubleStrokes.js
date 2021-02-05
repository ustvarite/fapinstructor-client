import store from "store";
import createInstruction from "game/actions/createInstruction";

const doubleStrokes = async ({
  playVoice,
  delay,
  setStrokeSpeed,
  getRandomStrokeSpeed,
  getRandomDuration,
}) => {
  const duration = getRandomDuration(5, 20);

  setStrokeSpeed(store.game.strokeSpeed * 2);

  playVoice("Faster");

  await delay(duration);
  setStrokeSpeed(getRandomStrokeSpeed());
};

export default createInstruction(doubleStrokes, {
  label: "Double Strokes",
});
