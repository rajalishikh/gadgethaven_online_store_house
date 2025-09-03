import { createBrowserRouter } from "react-router-dom";

import AllProduct from "../Components/AllProduct/AllProduct";
import Cart from "../Components/Cart/Cart";
import Dashboard from "../Components/DashBoard/Dashboard";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Home from "../Components/Home/Home";
import MainRoute from "../Components/MainRoute/MainRoute";
import Productdetails from "../Components/Productdetails/Productdetails";
import Static from "../Components/Static/Static";
import WishLIst from "../Components/WishLIst/WishLIst";

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
        element:<Static></Static>,
        loader:()=>fetch("/data.json")

      },
      {
        path:"/dashBoard",
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:"/dashBoard",
            element:<Cart></Cart>
          },
          
          {
          path:"wishlist",
          element:<WishLIst></WishLIst>
          }

        ]
        

      },
      
      {
        path:"/productDetails/:bookId",
        element: <Productdetails></Productdetails>,
        loader:()=>fetch("/data.json")
      },
      {
        path:"/AllProduct",
        element:<AllProduct></AllProduct>
      }
    ]
  },
]);