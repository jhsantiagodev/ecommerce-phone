import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { ErrorPages } from "../pages/ErrorPages";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { CellPhonesPage } from "../pages/CellPhonesPage";
import { CellPhonePage } from "../pages/CellPhonePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "celulares",
        element: <CellPhonesPage />,
      },
      {
        path: "celulares/:slug",
        element: <CellPhonePage />,
      },
      {
        path: "nosotros",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPages />,
  },
]);
