import { NavLink, } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function CartPage() {
    const cart = useSelector((state) => state.cart.value);
    console.log('in cart page, cart is : ', cart);

    const [totalAmount, setTotalAmount] = useState(0);

    function handleAmount() {

        // 1. efficient way
        let ans = cart.reduce(function(acc, curr) {
            return acc = acc + curr.price;
        }, 0);

        // 2. traditional way
        // let ans;
        // for(let i = 0; i <= cart.length; i++) {
        //     ans = ans + cart[i].price
        // }

        //common state variable for both logics:
        setTotalAmount(ans);
    }

    useEffect( function() {
        handleAmount();
    }, []);

    return (
        <div>
            {/* CartPage Component
            <CartItem /> */}

            {
                cart.length > 0
                ?
                (
                    <div>
                        {/* shows items  */}
                        <div>
                            {
                                cart.map( (item) => (<CartItem key={item.id} item={item} totalAmount={totalAmount}
                                    setTotalAmount={setTotalAmount} />))
                            }
                        </div>

                        {/* shows summary */}
                        <div>
                            <h4> Your Cart </h4>
                            <h2> Summary: </h2>
                            <div>
                                <p> Total items are : {cart.length} </p>
                                <p> Total amount is : {totalAmount} </p>
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <div>
                        <h3> Cart is Empty </h3>
                        <NavLink to='/'>
                            <button> Shop Now </button>
                        </NavLink>
                    </div>
                )
            }

        </div>
    )
}

export default CartPage;
