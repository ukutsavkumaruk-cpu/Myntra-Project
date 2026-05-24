import BagSummary from "../components/BagSummary";
import Footer from "../components/Footer";
import GenerateItem from "../components/GenerateItem";
import Header from "../components/Header";
import Home from "../components/Home";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Loading from "../components/Loader";

const Bag =()=>{
    const Loader = useSelector((store)=> store.fetchStatus)
    const item = useSelector((store)=>store.bag)
    
    
    return<>
    {item.map((item)=><GenerateItem item={item} />)}
    {Loader.currentlyfetching && <Loading></Loading>}
    <FetchItems></FetchItems>
    <BagSummary></BagSummary>
    </>
}
export default Bag;