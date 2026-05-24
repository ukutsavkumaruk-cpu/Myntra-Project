import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../myntraStore/itemsSlice";
import { FetchActions } from "../myntraStore/FetchStatusSlice";

const FetchItems = () => {

    const fetchStatus = useSelector((store)=>store.fetchStatus)
    const dispatch = useDispatch();

    

    // const controller = new AbortController();
    // const signal = controller.signal;
 useEffect(() => {
    if (fetchStatus.fetchDone) return;

    dispatch(FetchActions.markFetchingStart())
    fetch('http://localhost:8080/items'/*,{signal}*/)
    
      .then((response) => {
        console.log("Fetching started")
        return response.json()}) 
      .then(({items}) => {
        console.log(items);
        
        dispatch(itemActions.addInitialItems(items[0]))
        dispatch(FetchActions.markFetchDone())
        dispatch(FetchActions.markFetchingEnd())
      })
      .catch((error) => console.error('Error fetching data:', error));

    //   return ()=>{
    //     controller.abort();
    //   }
  }, [fetchStatus.fetchDone]);

    return<>
    </>
}
 export default FetchItems;