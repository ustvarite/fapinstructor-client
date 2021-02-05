// TODO: This file isn't being used.  Want to move the fetchPictures into here eventually
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import qs from "query-string";
import { State } from "common/store/rootReducer";
import api from "common/api/client";
import { AppThunk } from "common/store";
import MediaLink, { MediaRequest, MediaResponse } from "common/types/Media";
import { createNotification, Severity } from "common/store/notifications";

interface MediaState {
  loading: boolean;
  error: string | null;
  links: Array<MediaLink>;
}

const initialState: MediaState = {
  loading: false,
  error: null,
  links: [],
};

export const currentGameSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setLoading: (state: MediaState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state: MediaState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    appendLinks: (state: MediaState, action: PayloadAction<[MediaLink]>) => {
      state.links = state.links.concat(action.payload);
      state.loading = false;
    },
    clearLinks: (state: MediaState) => {
      state.links = [];
    },
  },
});

export const selectLoading = (state: State) => state.media.loading;
export const selectError = (state: State) => state.media.error;
export const selectMedia = (state: State) => state.media.links;

export const {
  setError,
  setLoading,
  appendLinks,
  clearLinks,
} = currentGameSlice.actions;

export default currentGameSlice.reducer;

export const fetchLinks = (request: MediaRequest): AppThunk => async (
  dispatch
) => {
  const url = `/v1/reddit?${qs.stringify(request)}`;

  try {
    dispatch(setLoading(true));
    const res = await api.get<MediaResponse>(url);
    const { failedSubreddits, links } = res.data;

    failedSubreddits.forEach((subreddit) => {
      dispatch(
        createNotification({
          message: `Error fetching subreddit: ${subreddit}`,
          duration: -1,
          severity: Severity.ERROR,
        })
      );
    });

    dispatch(appendLinks(links));
  } catch (err) {
    dispatch(
      createNotification({
        message: `Error fetching media: ${err.message}`,
        duration: -1,
        severity: Severity.ERROR,
      })
    );
  }
};
