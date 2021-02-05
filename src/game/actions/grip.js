import store from "store";
import createNotification from "engine/createNotification";
import { GripStrengthEnum, GripStrengthString } from "game/enums/GripStrength";
import play from "engine/audio";
import audioLibrary from "audio";
import { clamp, getRandomBoolean } from "utils/math";

const LIGHTEST_GRIP = 0;
const TIGHTEST_GRIP = Object.keys(GripStrengthEnum).length - 1;

/**
 * set the default / initial Grip again
 */
export const setDefaultGrip = () => {
  const currentGrip = store.game.gripStrength;
  const defaultGrip = store.config.initialGripStrength;

  if (currentGrip !== defaultGrip) {
    store.game.gripStrength = defaultGrip;
    createNotification({
      message: `Change your grip to ${
        GripStrengthString[store.game.gripStrength]
      }`,
    });
  }
};

export const setGrip = (grip) => {
  store.game.gripStrength = clamp(grip, LIGHTEST_GRIP, TIGHTEST_GRIP);
};

export const tightenGrip = () => {
  const currentGrip = store.game.gripStrength;

  if (currentGrip !== TIGHTEST_GRIP) {
    store.game.gripStrength = currentGrip + 1;
    createNotification({
      message: `Tighten your grip - ${
        GripStrengthString[store.game.gripStrength]
      }`,
    });
  }
};

export const loosenGrip = () => {
  const currentGrip = store.game.gripStrength;

  if (currentGrip !== LIGHTEST_GRIP) {
    store.game.gripStrength = currentGrip - 1;
    createNotification({
      message: `Loosen your grip - ${
        GripStrengthString[store.game.gripStrength]
      }`,
    });
  }
};

export const setDeathGrip = () => {
  store.game.gripStrength = TIGHTEST_GRIP;
  createNotification({
    message: `Tighten your grip until it hurts`,
  });

  if (store.enableVoice) {
    play(audioLibrary.Tighter);
  }
};

export const setBarelyTouching = () => {
  const currentGrip = store.game.gripStrength;

  if (currentGrip !== LIGHTEST_GRIP) {
    store.game.gripStrength = LIGHTEST_GRIP;
    createNotification({
      message: `Loosen your grip until you barely feel it`,
    });
  }
};

const randomGripAdjustment = async () => {
  if (getRandomBoolean()) {
    tightenGrip();
  } else {
    loosenGrip();
  }
};
randomGripAdjustment.label = "Random Grip Adjustment";

export default randomGripAdjustment;
