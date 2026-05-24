import { createSlice } from "@reduxjs/toolkit"


    const FetchStatus = createSlice({
        name: "fetchStatus",
        initialState:{
            fetchDone: false,
            currentlyfetching:false,
        },
        reducers:{
            markFetchDone: (state)=>{
                state.fetchDone = true;
            },
            markFetchingStart: (state)=>{
                 state.currentlyfetching = true;
            },
            markFetchingEnd: (state)=>{
                state.currentlyfetching = false;
            },

        }
    })

export const FetchActions = FetchStatus.actions;
export default FetchStatus;