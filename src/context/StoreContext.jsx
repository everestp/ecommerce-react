import { createContext, useEffect,useState } from "react";
import axios from "axios";
import { fetchItemList } from "../service/ItemService";

 export const StoreContext = createContext(null)

 export const StoreContextProvider = (props) => { 

const [itemList ,setItemList] = useState([])


const contextValue = {
itemList
};

useEffect(()=>{
async function loadData(){
const data = await fetchItemList()
setItemList(data)
console.log(data)
}
loadData()
},[])


 return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
  )
 }