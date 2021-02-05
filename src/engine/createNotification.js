/**
 * Transitioning to new notification system, this file has been turned
 * into an adapter
 */
import store from "common/store";
import {
  createNotification as createNotification2,
  dismissNotification as dismissNotification2,
  dismissAllNotifications as dismissAllNotifications2,
} from "common/store/notifications";

export const createNotification = (...args) => {
  const notification = store.dispatch(createNotification2(...args));

  return notification.payload.id;
};

export const dismissNotification = (id) =>
  store.dispatch(dismissNotification2(id));

export const dismissAllNotifications = () =>
  store.dispatch(dismissAllNotifications2());

export default createNotification;
