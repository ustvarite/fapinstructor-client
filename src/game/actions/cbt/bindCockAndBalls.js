import store from "store";
import createNotification, {
  dismissNotification,
} from "engine/createNotification";
import {
  strokerRemoteControl,
  clearStrokeEmissions,
} from "game/loops/strokeEmitter";
import videoLibrary from "video";
import { getRandomInclusiveInteger } from "utils/math";
import { nextSlide } from "game/utils/fetchPictures";

const bindCockAndBalls = async () => {
  if (!store.game.cockAndBallsBound) {
    clearStrokeEmissions();
    strokerRemoteControl.pause();
    store.game.mediaFrozen = true;
    // pause images
    const nid = createNotification({
      message: `Bind your cock & balls`,
      duration: -1,
      delay: true,
    });

    const videos = [
      videoLibrary.CockBallsTie,
      videoLibrary.BallSeperation,
      videoLibrary.CockBallWrapping,
      videoLibrary.BallWrapping,
    ];

    store.game.activeLink = {
      directLink: videos[getRandomInclusiveInteger(0, videos.length - 1)],
    };

    const done = async () => {
      dismissNotification(nid);
      strokerRemoteControl.play();
      store.game.mediaFrozen = false;
      store.game.cockAndBallsBound = true;
      nextSlide();
    };
    done.label = "Bound";

    return [done];
  }
};
bindCockAndBalls.label = "Bind Cock & Balls";

export default bindCockAndBalls;
