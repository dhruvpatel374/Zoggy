import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestMenu from "./components/RestMenu";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
   
  </div>
);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
