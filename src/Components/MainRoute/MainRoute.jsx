import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

const MainRoute = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
            

            
        </div>
    );
};

export default MainRoute;