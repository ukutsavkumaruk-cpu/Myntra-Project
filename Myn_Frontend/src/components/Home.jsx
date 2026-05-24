import { useSelector } from "react-redux";
import HomeItems from "./HomeItems";
import { useEffect } from "react";
import FetchItems from "./FetchItems";

const Home = () =>{
      const items = useSelector((store)=>store.items) 

    return(
      <>
        <div className="bag-page">
          <div className="bag-items-container">
            <FetchItems></FetchItems>
            {items.map((item) => <HomeItems key={item.id} item={item}/>)}
          </div>
          <div className="bag-summary">
          </div>
        </div>
      </>
    )
}
export default Home;