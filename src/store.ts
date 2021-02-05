import watchObject from "./utils/watchObject";
import type { GameConfig } from "configureStore";

type Store = {
  config?: GameConfig;
};

declare global {
  interface Window {
    store: Store;
  }
}

const store: Store = {
  config: undefined,
};

type Subscriber = () => void;

const subscribers: Subscriber[] = [];

/**
 * Observe for any changes in the store
 */
const subscribe = (callback: Subscriber) => {
  if (typeof callback !== "function") {
    console.error("subscribe expected a function, received", callback);
  }
  return subscribers.push(callback);
};

/**
 * Stop observing for change in the store
 */
const unsubscribe = (id: number) => {
  delete subscribers[id - 1];
};

/**
 * Wrap the store in an observable proxy
 */
const observableStore = watchObject(store, () => {
  subscribers.forEach((callback) => {
    callback();
  });
});

window.store = observableStore;

export { subscribe, unsubscribe };
export default observableStore;
