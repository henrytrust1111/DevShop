import { RouterProvider, createHashRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "../pages/auth/login/Login";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import OtherServices from "../pages/others/others";
import UserSignup from "../pages/auth/signUp/signUp";

const route = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/careers",
    element: <Services />,
  },
  {
    path: "/services",
    element: <OtherServices />
  },
  {
    path: "/signup",
    element: <UserSignup />
  },
  
]);

function Route() {
  return (
    <>
      <Toaster />
      <RouterProvider router={route} />
    </>
  );
}

export default Route;