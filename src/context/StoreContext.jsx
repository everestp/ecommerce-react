import { createContext, useEffect,useState } from "react";

import { products } from "../Utils/data";

 export const StoreContext = createContext(null)

 export const StoreContextProvider = (props) => { 

const [itemList ,setItemList] = useState([])


const contextValue = {
itemList
};

useEffect(()=>{
setItemList(products)

},[])


 return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
  )
 }