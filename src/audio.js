import { getRandomInclusiveInteger } from "utils/math";
import config from "config";

const { audioUrl } = config;

export const audioVariations = {
  Moan: 24,
  Faster: 2,
  Denied: 1,
  Orgasm: 3,
  Ruined: 3,
  CEI: 3,
};

export const getRandomAudioVariation = (key) => {
  if (!audioVariations.hasOwnProperty(key)) {
    throw new Error(`No audio variation found for ${key}`);
  }
  return audioLibrary[
    `${key}${getRandomInclusiveInteger(1, audioVariations[key])}`
  ];
};

const audioLibrary = {
  // cei
  CEI1: `${audioUrl}/cei/1.mp3`,
  CEI2: `${audioUrl}/cei/2.mp3`,
  CEI3: `${audioUrl}/cei/3.mp3`,
  // denied
  Denied1: `${audioUrl}/denied/1.mp3`,
  // faster
  Faster1: `${audioUrl}/faster/1.mp3`,
  Faster2: `${audioUrl}/faster/2.mp3`,
  // moan
  Moan1: `${audioUrl}/moan/1.mp3`,
  Moan2: `${audioUrl}/moan/2.mp3`,
  Moan3: `${audioUrl}/moan/3.mp3`,
  Moan4: `${audioUrl}/moan/4.mp3`,
  Moan5: `${audioUrl}/moan/5.mp3`,
  Moan6: `${audioUrl}/moan/6.mp3`,
  Moan7: `${audioUrl}/moan/7.mp3`,
  Moan8: `${audioUrl}/moan/8.mp3`,
  Moan9: `${audioUrl}/moan/9.mp3`,
  Moan10: `${audioUrl}/moan/10.mp3`,
  Moan11: `${audioUrl}/moan/11.mp3`,
  Moan12: `${audioUrl}/moan/12.mp3`,
  Moan13: `${audioUrl}/moan/13.mp3`,
  Moan14: `${audioUrl}/moan/14.mp3`,
  Moan15: `${audioUrl}/moan/15.mp3`,
  Moan16: `${audioUrl}/moan/16.mp3`,
  Moan17: `${audioUrl}/moan/17.mp3`,
  Moan18: `${audioUrl}/moan/18.mp3`,
  Moan19: `${audioUrl}/moan/19.mp3`,
  Moan20: `${audioUrl}/moan/20.mp3`,
  Moan21: `${audioUrl}/moan/21.mp3`,
  Moan22: `${audioUrl}/moan/22.mp3`,
  Moan23: `${audioUrl}/moan/23.mp3`,
  Moan24: `${audioUrl}/moan/24.mp3`,
  // orgas`m
  Orgasm1: `${audioUrl}/orgasm/1.mp3`,
  Orgasm2: `${audioUrl}/orgasm/2.mp3`,
  Orgasm3: `${audioUrl}/orgasm/3.mp3`,
  // ruined
  Ruined1: `${audioUrl}/ruined/1.mp3`,
  Ruined2: `${audioUrl}/ruined/2.mp3`,
  Ruined3: `${audioUrl}/ruined/3.mp3`,
  // misc.
  CardShuffle: `${audioUrl}/cardshuffle.mp3`,
  DontCumYet: `${audioUrl}/dontcumyet.mp3`,
  Edge: `${audioUrl}/edge.mp3`,
  HoldEdge: `${audioUrl}/holdedge.mp3`,
  KeepStroking: `${audioUrl}/keep_stroking.mp3`,
  LongMoan: `${audioUrl}/longMoan.mp3`,
  Obey: `${audioUrl}/obey.mp3`,
  RuinItForMe: `${audioUrl}/ruinitforme.mp3`,
  SlapBalls: `${audioUrl}/slapballs.mp3`,
  SqueezeBalls: `${audioUrl}/squeezeballs.mp3`,
  StartStrokingAgain: `${audioUrl}/start_stroking_again.mp3`,
  StartGame: `${audioUrl}/startgame.mp3`,
  ThereYouGo: `${audioUrl}/thereYouGo.mp3`,
  Tick: `${audioUrl}/tick.mp3`,
  Tighter: `${audioUrl}/tighter.mp3`,
};

export default audioLibrary;
