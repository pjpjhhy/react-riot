import { Outlet, createBrowserRouter } from "react-router-dom";
import Main from "./router/Main";
import NotFound from "./router/NotFound";
import Champions from "./component/Champions"

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
      ]
    },
   
  ]);

  export default router;