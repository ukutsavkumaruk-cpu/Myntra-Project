import { configureStore } from "@reduxjs/toolkit";
import Items from "./itemsSlice";
import FetchStatus from './FetchStatusSlice'
import BagSlice from "./BagSlice";

const mynStore = configureStore({
    reducer:{

        items: Items.reducer,
        fetchStatus : FetchStatus.reducer,
        bag : BagSlice.reducer,
    }
})

export default mynStore;