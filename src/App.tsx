import { ImageContextProvider } from "./ImageContextProvider";
import { ImagesTest } from "./ImagesTest";
import PullScreen from "./components/PullScreen";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./components/constants";

export const App = () => (
  <ImageContextProvider>
    <Routes>
      <Route path={ROUTES.MAIN} element={<PullScreen />} />
      <Route path={ROUTES.DETAILS} element={<ImagesTest />} />
      <Route path={`${ROUTES.DETAILS}/:id`} element={<ImagesTest />} />
    </Routes>
  </ImageContextProvider>
);
