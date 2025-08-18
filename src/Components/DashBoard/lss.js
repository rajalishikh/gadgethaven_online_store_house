const getStoreCard=()=>{
    let emptyData=[]
    const findData=localStorage.getItem("card")
    if(findData){
        emptyData=JSON.parse(findData)

    }
    return emptyData

}
const saveCart=(data)=>{
    const convertData=JSON.stringify(data)
    localStorage.setItem("card",convertData)
    
}

const addToLs=(id)=>{
    const bringData=getStoreCard()
    bringData.push(id)
    saveCart(bringData)
}

export { addToLs, getStoreCard, saveCart }

