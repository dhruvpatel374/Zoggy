import React from "react";
import { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Error from "./utils/ErrorPage/Error";
import RestMenu from "./components/RestMenu";
import About from "./components/About";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      { path: "/contact", element: <ContactUs /> },
      {
        path: "/restaurant/:resId",
        element: <RestMenu />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
