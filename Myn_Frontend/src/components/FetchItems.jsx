import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../myntraStore/itemsSlice";
import { FetchActions } from "../myntraStore/FetchStatusSlice";

const API_URL = import.meta.env.VITE_API_URL ?? "https://myntra-project-w1dq.onrender.com";

function normalizeItems(items) {
  if (!Array.isArray(items)) return [];
  if (items.length === 1 && Array.isArray(items[0])) return items[0];
  return items;
}

const FetchItems = () => {

    const fetchStatus = useSelector((store)=>store.fetchStatus)
    const dispatch = useDispatch();

 useEffect(() => {
    if (fetchStatus.fetchDone) return;

    dispatch(FetchActions.markFetchingStart())
    fetch(`${API_URL}/items`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        return response.json();
      })
      .then(({ items }) => {
        dispatch(itemActions.addInitialItems(normalizeItems(items)))
        dispatch(FetchActions.markFetchDone())
        dispatch(FetchActions.markFetchingEnd())
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        dispatch(FetchActions.markFetchingEnd());
      });
  }, [fetchStatus.fetchDone, dispatch]);

    return<>
    </>
}
 export default FetchItems;