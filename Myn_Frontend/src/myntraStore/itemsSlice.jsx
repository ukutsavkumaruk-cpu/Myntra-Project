import {createSlice} from "@reduxjs/toolkit"
import DEFAULT_ITEMS from "../data/items.js";
const ItemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers:{
        addInitialItems: (state,action)=>{
            console.log("Item slice called.",action)
            return  action.payload
        }
    }
})

export const itemActions = ItemsSlice.actions
export default ItemsSlice;