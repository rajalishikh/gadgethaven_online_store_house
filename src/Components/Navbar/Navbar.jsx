
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const location =useLocation()
  

    return (
        <div>
           
            <div id="my_banner" className="navbar text-[#FFFFFF]  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#9538E2] rounded-box z-[1] mt-3 w-52 p-2 shadow ">
          
      <li> <NavLink to={"/"} className={({isActive})=>isActive?"Active ":"nonActive" }>Home</NavLink></li>
      <li><NavLink to={"/static"} className={({isActive})=>isActive?"Active ":"nonActive" }>Static</NavLink></li>
      <li><NavLink to={"/dashboard/:id"} className={({isActive})=>isActive?"Active ":"nonActive" }>DashBoard</NavLink></li>
        
     
     
    
      </ul>
    </div>
    <a className=" text-xl font-bold">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <NavLink to={"/"} className={({isActive})=>isActive?"Active":"nonActive" }>Home</NavLink></li>
      <li><NavLink to={"/static"} className={({isActive})=>isActive?"Active":"nonActive" }>Static</NavLink></li>
      <li><NavLink to={"/dashboard/:id"} className={({isActive})=>isActive?"Active":"nonActive" }>DashBoard</NavLink></li>
     
      
      
    
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <div className="text-black bg-white p-2 rounded-full">
        <FaRegHeart />
    </div>
    <div className="bg-white p-2 rounded-full">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    </div>
         
    
  </div>
            </div>
           
            
        </div>
    );
};

export default Navbar;