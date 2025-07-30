import AllProduct from "../AllProduct/AllProduct";

const Home = () => {
    return (
        <div>
            {/* Banner container end  */}
            

                <div className="mb-20 flex justify-center">
                <div>
                    <h2 className="text-center text-black font-bold text-2xl mb-5">Explore Cutting-Edge Gadgets</h2>

                {/* All product container  */}
                <AllProduct></AllProduct>
                </div>
                
                </div>
            
        </div>
    );
};

export default Home;