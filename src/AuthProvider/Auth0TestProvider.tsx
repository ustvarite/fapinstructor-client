/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { Auth0Context } from "@auth0/auth0-react";
import { User } from "./Auth0Provider";

export type Auth = {
  user?: User;
  isAuthenticated?: boolean;
  isLoading?: boolean;
};

type AuthProviderProps = React.PropsWithChildren<Auth>;

export default function Auth0TestProvider({
  children,
  user,
  isAuthenticated,
  isLoading,
}: AuthProviderProps) {
  return (
    <Auth0Context.Provider
      value={{
        // getAccessTokenSilently: noop,
        // getAccessTokenWithPopup: noop,
        // getIdTokenClaims: noop,
        // loginWithPopup: noop,
        // @ts-expect-error
        loginWithRedirect: () => {},
        logout: () => {},
        user,
        isAuthenticated:
          isAuthenticated === undefined ? !!user : isAuthenticated,
        isLoading: isLoading === undefined ? !!user : isLoading,
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
}
