import { lazy } from "react";

import HomeTemplate from "../containers/Home";
import AdminTemplate from "../containers/Admin";
const routesHome = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../containers/Home/HomePage")),
  },
  {
    exact: false,
    path: "/list-movie",
    component: lazy(() => import("../containers/Home/ListMoviePage")),
  },
  {
    exact: false,
    path: "/detail-movie/:id",
    component: lazy(() => import("../containers/Home/DetailMoviePage")),
  },
  {
    exact: false,
    path: "/booking/:id",
    component: lazy(() => import("../containers/Home/BookingTicketPage/")),
  },
  {
    exact: false,
    path: "/mypage",
    component: lazy(() => import("../containers/Home/MyPage/")),
  },
];
const routesAdmin = [
  {
    eaxct: false,
    path: "/dashboard",
    component: lazy(() => import("../containers/Admin/Dashboard")),
  },

  {
    eaxct: false,
    path: "/dashboard/editfilm/:id",
    component: lazy(() => import("../containers/Admin/Film/EditFilm/EditFilm")),
  },
];

function renderRouteHome() {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}
function renderRouteAdmin() {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

export { renderRouteHome, renderRouteAdmin };
