import React, { memo, lazy } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ path: "", element: <HomePage /> }],
  },
];

function Router() {
  return useRoutes(routes);
}

export default memo(Router);
