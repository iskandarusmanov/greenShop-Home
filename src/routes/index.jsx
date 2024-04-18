import React from "react";
import Public from "./components/Public";
import Private from "./components/Private";
import { privateRoutes, publicRoutes } from "./routes";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFound";
import { MainLayout } from "../components";

const MainRoute = () => {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {privateRoutes.map((el) => (
          <Route
            key={el.path}
            path={el.path}
            element={
              <Private>
                <el.element />
              </Private>
            }
          />
        ))}

        {publicRoutes.map((el) => (
          <Route
            key={el.path}
            path={el.path}
            element={
              <Public>
                <el.element />
              </Public>
            }
          />
        ))}

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
