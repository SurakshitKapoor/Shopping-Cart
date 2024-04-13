import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

function CartItem({item, totalAmount, setTotalAmount}) {

    const {cart} = useSelector((state) => state.cart.value);
    console.log('cartItem : ', cart);
    const dispatch = useDispatch();

    function removeFromCart () {
        dispatch(remove(item.id));
        console.log("removed");

        setTotalAmount(totalAmount - item.price);
    }
    
    return (
        <div>
            {/* CartItem Component */}
            
            <div>
                <img src={item.image} alt="item_image" />
            </div>
            <div>
                <h4> {item.title} </h4>
            </div>
            <div>
                <p> {item.description} </p>
            </div>
            <div>
                <h5> {item.price} </h5>
            </div>
            <div>
                {
                    (<div>
                        <button onClick={() => removeFromCart()}>
                            Remove from Cart
                        </button>
                    </div>)
                }
            </div>
        </div>
    )
}

export default CartItem;
