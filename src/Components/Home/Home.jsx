import AllProduct from "../AllProduct/AllProduct";



const Home = () => {
    return (
        <div>
            {/* glass section start */}
                
            {/* glass section End */}
            
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