import { TiDeleteOutline } from "react-icons/ti";
import { getStoreCard, saveCart } from "../DashBoard/lss";



const Dbsd = ({saveData}) => {
    const {id,category,name,specification,price,rating,image,details}=saveData
  

    const handleDeleteClick=(id)=>{
      console.log("MY Id",id)
      const getTheData=getStoreCard()
      const deleteData=getTheData.filter(item=>item.id != id)
      saveCart(deleteData)
      location.reload()
      
    }
    return (
        <div>
             

            <div>
               <div className="card card-side bg-base-100 shadow-xl mb-4 mt-4">
  <figure>
    {/* Image part */}
    <img
    className="w-[200px] h-[124px] m-4"
      src={image}
      alt="Movie" />
      
  </figure>
  {/* container part  */}
  <div className="flex  justify-between w-full items-center">
    <div>
        <h2 className="card-title font-bold text-xl">{name}</h2>
        <p>{specification}</p>
        <p className="font-bold text-xl">Price:${price}</p>

    </div>
    
    <div className="mr-2 hover:bg-[#9538E2] rounded-full ">
      <button onClick={()=>handleDeleteClick(id)} className="text-4xl  text-red-600 hover:text-white"><TiDeleteOutline /></button>
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Dbsd;