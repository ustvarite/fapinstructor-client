import React, { useEffect, useContext } from "react";
import { subscribe, unsubscribe } from "store";

export const ProxyStoreContext = React.createContext();

export const ProxyStoreProvider = ({ store, children }) => (
  <ProxyStoreContext.Provider value={store}>
    {children}
  </ProxyStoreContext.Provider>
);

export const ProxyStoreConsumer = ({ children }) => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const context = useContext(ProxyStoreContext);

  useEffect(() => {
    const subscriberId = subscribe(forceUpdate);

    return () => {
      unsubscribe(subscriberId);
    };
  }, [forceUpdate]);

  return children(context);
};
