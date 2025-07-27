import ProductContainer from "../ProductContainer/ProductContainer";

const AllProduct = () => {
    return (
        <div  className="flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row gap-6 border sm:justify-center">
            <div className="bg-[#FFFFFF] p-2 rounded-xl flex justify-center h-[400px]">
                {/* Product Button */}
               <div >
                 <button className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">All product</button><br />
                 <button className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">Laptop </button><br />
                 <button className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">Phones</button><br />
                 <button className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">Accessories</button><br />
                 <button className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">Smart watches </button><br />
                 <button className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">Mac Book </button><br />
                 <button className="p-3 rounded-xl bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white font-bold mb-2 w-36">I phone </button><br />
                 
                 
               </div>
            </div>
            {/* product container  */}
            <div>
                <ProductContainer></ProductContainer>
            </div>
            
        </div>
    );
};

export default AllProduct;