const getStoreCard2=()=>{
    const findWishValue=localStorage.getItem("wish")
    if(findWishValue){
        return JSON.parse(findWishValue)
    }else{
        return []
    }
}

const saveCard=(saveData)=>{
    
    const convert=JSON.stringify(saveData)
    localStorage.setItem("wish",convert)
}

const pushData=(data)=>{
    const findData=getStoreCard()
    findData.push(data)
    saveCard(findData)
}

export { getStoreCard2, pushData }

