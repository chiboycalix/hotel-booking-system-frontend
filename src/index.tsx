import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import App from "./App";
import ErrorPage from "./pages/error-page";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landing-page";
import Auth from "./pages/auth";
import { ROUTES } from "./constants/routes";
import PrivacyNotice from "./pages/privacy-notice";
import TermsOfUse from "./pages/terms-of-use";


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
    path: ROUTES.LANDING,
    element: <LandingPage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Auth />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Auth />,
  },
  {
    path: ROUTES.FORGET_PASSWORD,
    element: <Auth />,
  },
  {
    path: ROUTES.RESET_PASSWORD,
    element: <Auth />,
  },
  {
    path: ROUTES.PASSWORD_CHANGED,
    element: <Auth />,
  },
  {
    path: ROUTES.PRIVACY_NOTICE,
    element: <PrivacyNotice />
  },
  {
    path: ROUTES.TERMS_OF_USE,
    element: <TermsOfUse />
  }
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

reportWebVitals();
