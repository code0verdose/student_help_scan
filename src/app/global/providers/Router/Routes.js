import Main from "../../../../pages/Main/main";
import Login from "../../../../pages/Login/login";
import Search from "../../../../pages/Search/search";
import Result from "../../../../pages/Result/result";
import NotFound from "../../../../pages/NotFound/NotFound";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: "/*",
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
