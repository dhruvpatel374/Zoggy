import React from "react";
import { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Error from "./utils/ErrorPage/Error";
import RestMenu from "./components/RestMenu";
import { ImageProvider } from "./utils/ImageContext.js";
import About from "./components/About";
import { FilterProvider } from "./utils/FilterContext.js";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import appStore from "./store/appStore.js";
import Cart from "./components/Cart.js";

const AppLayout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Provider store={appStore}>
        <Header />

        <FilterProvider>
          <ImageProvider>
            <Outlet />
          </ImageProvider>
        </FilterProvider>

        <Footer />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant",
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
