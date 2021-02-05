import createNotification from "engine/createNotification";
import { Severity } from "common/store/notifications";
import qs from "query-string";
import { MediaRequest, MediaResponse } from "common/types/Media";
import api from "common/api/client";

async function fetchRedditPics(request: MediaRequest) {
  const url = `/v1/reddit?${qs.stringify(request, { arrayFormat: "comma" })}`;

  const res = await api.get<MediaResponse>(url);
  const { failedSubreddits, links } = res.data;

  failedSubreddits.forEach((subreddit) => {
    createNotification({
      message: `Error fetching subreddit: ${subreddit}`,
      duration: -1,
      severity: Severity.ERROR,
    });
  });

  return { links, failedSubreddits };
}

export default fetchRedditPics;
