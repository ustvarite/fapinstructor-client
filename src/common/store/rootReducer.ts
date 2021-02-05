import { combineReducers } from "redux";

import notifications from "./notifications";
import currentUser from "./currentUser";
import currentGame from "./currentGame";
import createGame from "./createGame";
import tags from "./tags";
import games from "./games";
import media from "./media";

export const rootReducer = combineReducers({
  notifications,
  currentUser,
  currentGame,
  createGame,
  tags,
  games,
  media,
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
