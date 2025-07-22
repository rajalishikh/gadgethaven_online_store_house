import Glass from "../Glass/Glass";
import Navbar from "../Navbar/Navbar";
const Banner = () => {
    return (
        <div> 
            {/* my banner container  */}
            <div id="1" className="relative mt-6 lg:pr-6 lg:pl-6 md:pr-6 md:pl-6 mb-96">
                <div className="min-h-screen bg-[#9538E2]  rounded-xl relative">
                <Navbar></Navbar>
                <div className="ml-44 absolute mt-32">
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