import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import qs from "query-string";
import { State } from "common/store/rootReducer";
import { AppThunk } from "common/store";
import { Game } from "api/types";
import { Pagination } from "common/types/pagination";
import { createNotification, Severity } from "common/store/notifications";
import api from "common/api/client";
import {
  SearchGamesRequest,
  SearchGamesResponse,
} from "common/api/schemas/games";

interface GamesState {
  loading: boolean;
  error?: string;
  games: Game[];
  pagination: Pagination;
}

const initialState: GamesState = {
  loading: false,
  error: undefined,
  games: [],
  pagination: {
    total: 0,
    lastPage: 0,
    perPage: 0,
    currentPage: 0,
    to: 0,
    from: 0,
  },
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setLoading: (state: GamesState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state: GamesState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setPagination: (state: GamesState, action: PayloadAction<Pagination>) => {
      state.pagination = action.payload;
    },
    setGames: (state: GamesState, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
  },
});

export const selectLoading = (state: State) => state.games.loading;
export const selectError = (state: State) => state.games.error;
export const selectGames = (state: State) => state.games.games;
export const selectPagination = (state: State) => state.games.pagination;

export const {
  setError,
  setLoading,
  setGames,
  setPagination,
} = gamesSlice.actions;

export default gamesSlice.reducer;

export const searchGames = (request: SearchGamesRequest): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(setLoading(true));

    let url;
    if (request.playedBy) {
      url = `/v1/users/${request.playedBy}/games/history?${qs.stringify(
        request
      )}`;
    } else {
      url = `/v1/games?${qs.stringify(request)}`;
    }

    const { data: games } = await api.get<SearchGamesResponse>(url);

    dispatch(setPagination(games.pagination));
    dispatch(setGames(games.data));
  } catch (err) {
    const message = `Error searching games: ${err.message}`;

    dispatch(
      createNotification({
        message,
        duration: -1,
        severity: Severity.ERROR,
      })
    );

    dispatch(setError(message));
  } finally {
    dispatch(setLoading(false));
  }
};
