import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

function Card ({post}) {

    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    function addToCart() {
        console.log('addToCart called');
        dispatch(add(post));
        console.log('cart after add is : ', cart);
    }

    function removeFromCart () {
        dispatch(remove(post.id));
    }
    
    return (
      <div>
       
        <h4> Post No. : {post.id} </h4>

        <div>
          <p> {post.title} </p>
        </div>
        <div>
          <p> {post.description} </p>
        </div>
        <div>
          <img src={post.image} alt="product img" />
        </div>
        <div>
          <p> {post.price} </p>
        </div>
        
        {
           
                cart.some((item) => item.id === post.id)
                ?
                // putting onClick={removeFromCart()} -> will call func iteself w/o any click -> so enclose that called handler func within a func 
                (<button onClick={() => removeFromCart()}>      
                    Remove from Cart
                </button>)
                :
                (<button onClick={() => addToCart()}>
                    Add to Cart
                </button>)
            
        }

        <hr />

      </div>
    );
}

export default Card;
