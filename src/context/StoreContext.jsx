import { createContext, useEffect,useState } from "react";

import { toast } from "react-toastify";
import { products } from "../Utils/data";

 export const StoreContext = createContext(null)

 export const StoreContextProvider = (props) => { 

const [itemList ,setItemList] = useState([])
const [quantities,setQuantities] = useState({})

const increaseQty = (foodId) =>{ 

setQuantities((prev)=>({...prev,[foodId]:(prev[foodId] || 0)+1 }))
toast.success("Added to Cart")

}

const decreaseQty = (foodId) =>{
  
    setQuantities((prev)=>({...prev,[foodId]:prev[foodId]>0? prev[foodId]-1:0 }))

  
}

const removeFromCart = (foodId)=>{
  setQuantities((prevQuantities)=>{
    const updateQuantities ={...prevQuantities};
    delete updateQuantities[foodId];
    toast.error("Items Removed")
    return updateQuantities;

  })
}

const contextValue = {
itemList,
increaseQty,
decreaseQty,
quantities,
removeFromCart
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