import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ErrorPage from "./pages/error-page";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import LandingPage from "./pages/landing-page";
import { ROUTES } from "./constants/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    loader: () => import("./App"),
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.LANDING,
    element: <LandingPage />,
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
