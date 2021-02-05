// TODO: Move this logic into the redux slice/store
import createNotification from "engine/createNotification";
import { Severity } from "common/store/notifications";
import store from "store";
import fetchRedditPics from "api/fetchRedditPics";
import { MediaType } from "common/types/Media";
// import reduxStore from "common/store";
// import { fetchLinks } from "common/store/media";

const PRELOAD_LINK_THRESHOLD = 5;
const ESTIMATED_SKIP_RATE = 1.5;
const LIMIT_CAP = 1000;

const preloadImage = (url: string) => (new Image().src = url);

export const nextSlide = async () => {
  if (store.game.mediaFrozen) {
    return;
  }

  // load more pictures when close to running out
  if (
    store.game.pictures.length - store.game.pictureIndex <
    PRELOAD_LINK_THRESHOLD
  ) {
    await fetchPictures();

    // If we loaded images succesfully, skip the default image
    if (store.game.pictures.length > 1 && store.game.pictureIndex === -1) {
      store.game.pictureIndex++;
    }
  }

  // Do not increment the index if there aren't any more images
  if (store.game.pictureIndex + 1 < store.game.pictures.length) {
    store.game.pictureIndex++;
    store.game.activeLink = store.game.pictures[store.game.pictureIndex];

    // If the next item is an image, preload it
    if (store.game.pictureIndex + 1 < store.game.pictures.length) {
      const nextItem = store.game.pictures[store.game.pictureIndex + 1];
      if (
        nextItem.mediaType === MediaType.Picture ||
        nextItem.mediaType === MediaType.Gif
      ) {
        preloadImage(nextItem.directLink);
      }
    }
  }
};

export const parseTags = (keys: string) => {
  const splitOnCommaOutsideSqBr = /,(?![^[]*])/g;

  return keys
    ? keys.split(splitOnCommaOutsideSqBr).map((key) => key.trim())
    : [];
};

async function fetchPictures() {
  const redditIds = parseTags(store.config.redditId);

  if (redditIds?.length > 0) {
    try {
      const {
        gifs,
        pictures,
        videos,
        slideDuration,
        maximumGameTime,
      } = store.config;

      // Translate config settings to allowed mediatypes
      const mediaTypes = [];
      if (gifs) {
        mediaTypes.push(MediaType.Gif);
      }
      if (pictures) {
        mediaTypes.push(MediaType.Picture);
      }
      if (videos) {
        mediaTypes.push(MediaType.Video);
      }

      // Prevent multiple API calls by trying to fetch enough links for a game
      const estimatedRequiredLinkCount = Math.min(
        ((maximumGameTime * 60) / slideDuration) * ESTIMATED_SKIP_RATE,
        LIMIT_CAP
      );

      // case-insensitive array dedupe
      const subreddits = Array.from(
        new Set(redditIds.map((id) => id.toLowerCase()))
      );

      const { links, failedSubreddits } = await fetchRedditPics({
        subreddits,
        limit: estimatedRequiredLinkCount,
        mediaTypes: mediaTypes,
      });

      failedSubreddits?.forEach((subreddit) => {
        createNotification({
          message: `Error fetching subreddit: ${subreddit}`,
          duration: -1,
          severity: Severity.ERROR,
        });

        // Remove failed subreddits from game
        subreddits.splice(subreddits.indexOf(subreddit), 1);
        store.config.redditId = subreddits.join(",");
      });

      store.game.pictures = store.game.pictures.concat(links);
    } catch (err) {
      createNotification({
        message: `Error fetching media: ${err.message}`,
        duration: -1,
        severity: Severity.ERROR,
      });
    }
  }
}

export default fetchPictures;
