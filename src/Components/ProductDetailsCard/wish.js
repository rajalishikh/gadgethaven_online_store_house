const getStoreCard2=()=>{
    const findWishValue=localStorage.getItem("wish")
    if(findWishValue){
        return JSON.parse(findWishValue)
    }else{
        return []
    }
}

const saveCard2=(saveData)=>{
    
    const convert=JSON.stringify(saveData)
    localStorage.setItem("wish",convert)
}

const pushData=(data)=>{
    const findData=getStoreCard2()
    findData.push(data)
    saveCard2(findData)
}

export { getStoreCard2, pushData, saveCard2 }

