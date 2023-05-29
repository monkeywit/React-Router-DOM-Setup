import { lazy, Fragment, LazyExoticComponent, Suspense } from "react";
import { Route, Outlet } from "react-router-dom";

import { PATH_LOGIN } from "./paths";

interface RouteProps {
  path?: string;
  element?: LazyExoticComponent<() => JSX.Element> | null;
  layout?: LazyExoticComponent<
    (props: { children: React.ReactNode }) => JSX.Element
  > | null;
  guard?: LazyExoticComponent<
    (props: { children: React.ReactNode }) => JSX.Element
  > | null;
  children?: RouteProps[];
}

export const renderRoutes = (routes: RouteProps[]) => {
  return routes.map((route, index) => {
    const Component = route.element || Fragment;
    const Layout = route.layout || Fragment;
    const Guard = route.guard || Fragment;
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Guard>
              <Layout>{route.children ? <Outlet /> : <Component />}</Layout>
            </Guard>
          </Suspense>
        }
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
};

export const routes: RouteProps[] = [
  {
    path: PATH_LOGIN,
    element: lazy(async () => await import("../pages/Login")),
  },
  // protected routes
  {
    layout: lazy(async () => await import("../layouts/AppLayout")),
    guard: lazy(async () => await import("../guards/AuthGuard")),
    children: [
      {
        path: "/",
        element: lazy(async () => await import("../pages/Home")),
      },
      {
        path: "/about",
        element: lazy(async () => await import("../pages/About")),
      },
      {
        path: "/contact",
        element: lazy(async () => await import("../pages/Contact")),
      },
    ],
  },
  {
    path: "*",
    element: lazy(async () => await import("../pages/NotFound")),
  }
];
