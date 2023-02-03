import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Main from "./Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

