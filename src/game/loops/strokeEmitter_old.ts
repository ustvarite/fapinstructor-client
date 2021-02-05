import store from "store";
import remoteControl from "./remoteControl";
import { createObservable } from "utils/observable";
import type { GameLoopArgs } from "engine/loop";

export const strokerRemoteControl = Object.create(remoteControl);

type EmissionEvent = {
  type: "emit";
  strokeTime: number;
};

type ClearEvent = {
  type: "clear";
};

export type StrokeEvent = EmissionEvent | ClearEvent;

export const strokeEmitterObservable = createObservable<StrokeEvent>();

export type StrokeEmitterObservable = typeof strokeEmitterObservable;

let lastStroke = 0;
const strokeEmitter = ({ timestamp, progress }: GameLoopArgs) => {
  if (!strokerRemoteControl.paused) {
    const { strokeSpeed } = store.game;

    if (strokeSpeed > 0) {
      if (lastStroke > (1 / strokeSpeed) * 1000) {
        strokeEmitterObservable.notify({
          type: "emit",
          strokeTime: timestamp,
        });

        store.game.strokes++;
        lastStroke = 0;
      } else {
        lastStroke += progress;
      }
    }
  }
};

strokeEmitter.reset = () => {
  lastStroke = 0;
};

export function clearStrokeEmissions() {
  strokeEmitterObservable.notify({
    type: "clear",
  });
}

export default strokeEmitter;
