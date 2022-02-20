import { ImageContextProvider } from "./ImageContextProvider";
import ChampionDetails from "./components/ChampionDetails";
import PullScreen from "./components/PullScreen";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./components/constants";
import "./App.module.css";

export const App = () => (
  <ImageContextProvider>
    <Routes>
      <Route path={ROUTES.MAIN} element={<PullScreen />} />
      <Route path={ROUTES.DETAILS} element={<ChampionDetails />} />
      <Route path={`${ROUTES.DETAILS}/:id`} element={<ChampionDetails />} />
    </Routes>
  </ImageContextProvider>
);
