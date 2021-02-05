import store from "store";
import play from "engine/audio";
import { getRandomAudioVariation } from "audio";

const playVoice = (variationName: string) => {
  if (store.enableVoice) {
    play(getRandomAudioVariation(variationName));
  }
};

export default playVoice;
