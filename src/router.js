import { Outlet, createBrowserRouter } from "react-router-dom";
import Main from "./router/Main";
import NotFound from "./router/NotFound";
import Champions from "./component/Champions"
import ChampDetail from "./component/ChampDetail";
import Items from "./component/Items";
import Esport from "./component/Esport";
import Universe from "./component/Universe";

const router = createBrowserRouter([
    {
      path: "",
      element: <Outlet />,
      errorElement: <NotFound/>,
      children: [
        {
            path: "/",
            element: <Main/>
        },
        {
            path: "champion",
            element: <Champions/>
        },
        {
          path: "champdetail/:id",
          element: <ChampDetail/>
        },
        {
          path: "item",
          element: <Items/>
        },
        {
          path: "esport",
          element: <Esport/>
        },
        {
          path: "universe",
          element: <Universe/>
        },
      ]
    },
   
  ]);

  export default router;