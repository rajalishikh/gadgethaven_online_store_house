import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import MainRoute from "../Components/MainRoute/MainRoute";
import Static from "../Components/Static/Static";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:"/static",
        element:<Static></Static>

      }
    ]
  },
]);