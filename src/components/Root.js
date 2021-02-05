import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "components/organisms/ErrorBoundary";
import { ProxyStoreProvider } from "containers/StoreProvider";
import Auth0Provider from "AuthProvider";
import Pages from "./Pages";

const Root = ({ store }) => {
  return (
    <ErrorBoundary>
      <Router>
        <Auth0Provider>
          <ProxyStoreProvider store={store}>
            <div
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Pages />
            </div>
          </ProxyStoreProvider>
        </Auth0Provider>
      </Router>
    </ErrorBoundary>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
