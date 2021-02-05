import * as Sentry from "@sentry/react";

export default function captureError(error) {
  Sentry.captureException(error);
  console.error(error);
}
