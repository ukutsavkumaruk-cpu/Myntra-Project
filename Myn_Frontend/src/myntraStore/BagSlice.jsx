import {createSlice} from "@reduxjs/toolkit"
const BagSlice = createSlice({
    name: "bag",
    initialState: [],
    reducers:{
        addToBag: (state,action)=>{
            state.push(action.payload)
        },
        removeItem: (state,action)=>{
            console.log("remove trigger")
            return state.filter((item)=>item.id != action.payload.id)
        },
    }
})

export const bagActions = BagSlice.actions
export default BagSlice;