import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";
import Banner from '../Banner/Banner';
import BannerSection from "../BannerSection/BannerSection";
import Glass from '../Glass/Glass';



const Home = () => {
    const location=useLocation()
    
    return (
        <div>
           {/* banner section */}
           <Helmet>
            <title>Home Page</title>

           </Helmet>
           

           
           
            <div className="min-h-[500px] lg:min-h-[800px] bg-[#9538E2] m-2 rounded-xl relative mb-40 md:mb-[500px] lg:mb-96">
              <Banner></Banner>
                
             <div className="pt-6">
                 <BannerSection></BannerSection>
             </div>
              {/* glass section start */}
                <div 
                className="absolute
     ml-0 mt-8        
    sm:ml-8 sm:mt-6   
    md:ml-2 md:mt-16 
    lg:ml-0 lg:mt-32 
    xl:ml-32 xl:mt-40 
    2xl:ml-48 2xl:mt-48">
                     <Glass></Glass>
               </div>
                 {/* glass section End */}

            </div>
            
            
             {/* All product container start  */}
             <div className="mb-20 flex justify-center">
                <div>
                    <h2 className="text-center text-black font-bold text-2xl mb-5">Explore Cutting-Edge Gadgets</h2>

               
                <AllProduct></AllProduct>
               
                </div>
                
                </div>
             {/* All product container end  */}
            
        </div>
    );
};

export default Home;