import { getStoreCard } from "../DashBoard/lss.js";
import Dbsd from "../DashBoardSaveData/Dbsd.jsx";
const WishLIst = () => {
     const saveData=getStoreCard()
    return (
        <div>
            <div className="lg:ml-24 lg:mr-24 mt-10">
                        
                       
            
                        {/* heading part of container  */}
                        <div className="lg:flex md:flex lg:justify-between md:justify-between sm:justify-center mb-8">
                          <div className=""><h3 className="text-black  text-xl font-bold text-center">WishLIst</h3></div>
                         
            
                        </div>
                        {/* heading part end  of container  */}
                        {/* div for heading  */}
                        {
                          saveData.map((item,idx)=><Dbsd key={idx} saveData={item}></Dbsd>)
                        }
                       
                      </div>
                        
        </div>
    );
};

export default WishLIst;