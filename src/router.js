import { Outlet, createBrowserRouter } from "react-router-dom";
import Main from "./router/Main";
import NotFound from "./router/NotFound";
import Champions from "./component/Champions"
import ChampDetail from "./component/ChampDetail";

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
      ]
    },
   
  ]);

  export default router;