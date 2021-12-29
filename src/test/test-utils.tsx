import { Suspense, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import {
  render as rtlRender,
  screen,
  RenderOptions,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import Auth0TestProvider, { Auth } from "@/providers/Auth0TestProvider";
import store from "@/stores";

type Options = RenderOptions & {
  route?: string;
  auth?: Auth;
};

type WrapperProps = PropsWithChildren<Options>;

export async function waitForSuspense() {
  const result = screen.queryAllByText("Loading...");
  if (result.length > 0) {
    await waitForElementToBeRemoved(result);
  }
}

// eslint-disable-next-line import/export
export function render(
  ui: React.ReactElement,
  { route = "/", auth, ...options }: Options = {}
) {
  function Wrapper({ children }: WrapperProps) {
    return (
      <Provider store={store}>
        <Auth0TestProvider {...auth}>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </Auth0TestProvider>
      </Provider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

// eslint-disable-next-line import/export
export * from "@testing-library/react";
