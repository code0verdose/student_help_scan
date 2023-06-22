import "./global/global.module.css";
import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/main";
import Login from "../pages/Login/login";
import Layout from "../layout/Layout";
import Search from "../pages/Search/search";
import Result from "../pages/Result/result";
import NotFound from "../pages/NotFound/NotFound";
import { useState } from "react";
import { TokenProvider } from "./global/providers/TokenProvider";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Search",
      element: <Search />,
    },
    {
      path: "/Result",
      element: <Result />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <TokenProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </TokenProvider>
  );
}
export default App;
