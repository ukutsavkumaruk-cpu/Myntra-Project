import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../myntraStore/BagSlice";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BiCartAdd } from "react-icons/bi";

const HomeItems = ({item}) =>{

    const dispatch = useDispatch()
    const bagItems = useSelector((store)=> store.bag)
    const itemFound = bagItems.includes(item)
    

    return(
    <div className="item-container">
        <div className="item-image-box">
      <img className="item-image" src={item.image} alt="item image"/>
      </div>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      
        {itemFound? <button type="button" style={{ backgroundColor: "#c53c19db" }} className="btn btn-danger btn-add-bag" onClick={()=>dispatch(bagActions.removeItem(item))}>Remove</button>
  : <button type="button" className="btn btn-success btn-add-bag"
  style={{ backgroundColor: "#2cb954c6" }} onClick={() =>  dispatch(bagActions.addToBag(item))}><BiCartAdd /></button>  }
      
      
    </div>
    )
}
export default HomeItems;