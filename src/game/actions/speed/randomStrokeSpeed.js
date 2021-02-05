import {
  getRandomStrokeSpeed as randomStrokeSpeedUtil,
  setStrokeSpeed,
} from "game/utils/strokeSpeed";

const randomStrokeSpeed = async () => {
  const speed = randomStrokeSpeedUtil({ slow: 0, fast: 0 });
  setStrokeSpeed(speed);
};
randomStrokeSpeed.label = "Random Stroke Speed";

export default randomStrokeSpeed;
