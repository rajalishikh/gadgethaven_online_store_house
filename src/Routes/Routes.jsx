import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../Components/DashBoard/Dashboard";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Home from "../Components/Home/Home";
import MainRoute from "../Components/MainRoute/MainRoute";
import Productdetails from "../Components/Productdetails/Productdetails";
import Static from "../Components/Static/Static";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
      {

        path:"/static",
        element:<Static></Static>

      },
      {
        path:"/dashBoard/:id",
        element:<Dashboard></Dashboard>,
        

      },
      
      {
        path:"/productDetails/:bookId",
        element: <Productdetails></Productdetails>,
        loader:()=>fetch("../../public/data.json")
      }
    ]
  },
]);