import Glass from "../Glass/Glass";
import Navbar from "../Navbar/Navbar";
const Banner = () => {
    return (
        <div> 
            {/* my banner container  */}
            <div id="1" className="relative mt-6 pr-2 pl-2 lg:pr-6 lg:pl-6 md:pr-6 md:pl-6 mb-64 md:mb-[600px] lg:mb-96 ">
                <div className="min-h-[500px] lg:min-h-[800px] bg-[#9538E2]  rounded-xl relative">
                <Navbar></Navbar>
                <div 
                className="absolute 
     ml-0 mt-3        
    sm:ml-8 sm:mt-6   
    md:ml-2 md:mt-16 
    lg:ml-0 lg:mt-32 
    xl:ml-20 xl:mt-40 
    2xl:ml-48 2xl:mt-48">
                     <Glass></Glass>
               </div>
               
                </div>
                
               </div>
               {/* Banner container end  */}

            <div id="2">
                <h3>1hi</h3>
            </div>

            
        </div>
        
    );
};

export default Banner;