import { StrokeService } from "@/game/xstate/services";
import {
  createNotification,
  dismissNotification,
} from "@/game/engine/notification";
import { delay } from "@/game/engine/delay";

const warmup = async () => {
  const warmup = async () => {
    StrokeService.play();
    const segment1 = 30 * 1000;
    const segment2 = 60 * 1000;

    const nid = createNotification({
      message: `Warming up`,
      duration: segment1 + segment2,
      showProgress: true,
    });

    StrokeService.setStrokeSpeed(0.5);

    await delay(segment1);
    StrokeService.setStrokeSpeed(1);
    await delay(segment2);

    dismissNotification(nid);

    await delay(1000);

    StrokeService.setStrokeSpeed(0.25);
  };
  warmup.label = "Warm up";

  const ready = async () => {
    StrokeService.play();
    StrokeService.setStrokeSpeed(0.75);
  };
  ready.label = "I'm Ready!";

  return [warmup, ready];
};

warmup.label = "Warm Up";

export default warmup;
