import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import About from "./about";
import * as React from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/about",
      element: <About />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
