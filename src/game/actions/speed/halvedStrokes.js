import store from "store";
import { setStrokeSpeed } from "game/utils/strokeSpeed";

const halvedStrokes = async () => {
  setStrokeSpeed(store.game.strokeSpeed / 2);
};
halvedStrokes.label = "Halved Strokes";

export default halvedStrokes;
