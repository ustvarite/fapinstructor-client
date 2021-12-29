import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { lazyImport } from "@/utils/lazyImport";

// prettier-ignore
const { GameConfig } = lazyImport(() => import("@/features/game-config"), "GameConfig");
const { Game } = lazyImport(() => import("@/features/game"), "Game");
const { End } = lazyImport(() => import("@/features/end"), "End");
// prettier-ignore
const { ChangeLog } = lazyImport(() => import("@/features/changelog"), "ChangeLog");
// prettier-ignore
const { PrivacyPolicy } = lazyImport(() => import("@/features/privacy-policy"), "PrivacyPolicy");
const { Faq } = lazyImport(() => import("@/features/faq"), "Faq");
const { Search } = lazyImport(() => import("@/features/search"), "Search");
const { Profile } = lazyImport(() => import("@/features/profile"), "Profile");

function PrivateRoute() {
  const { user } = useAuth0();

  return user ? <Outlet /> : <Navigate to="/" />;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="games/*" element={<Search />} />
      <Route path="game">
        <Route path=":config" element={<Game />} />
        <Route path="" element={<Game />} />
      </Route>
      <Route path="changelog" element={<ChangeLog />} />
      <Route path="privacy" element={<PrivacyPolicy />} />
      <Route path="faq" element={<Faq />} />
      <Route path="endgame" element={<End />} />
      <Route path="" element={<GameConfig />} />
      <Route element={<PrivateRoute />}>
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
