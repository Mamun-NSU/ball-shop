import React from "react";
import './Cart.css';


const Cart = ({ cart, emptyCart, randomPick }) => {
    console.log(cart);

    const ballName = [];
    for (const ball of cart) {
        ballName.push(ball.name);
    }
    return (
        <div className="cart">
            <h2> Order Summary </h2>
            <p>Selected Balls: {cart.length}</p>
            <p>Items Name: {ballName}</p>

            <div className="btn-group">
                <button onClick={randomPick}>
                    <p className="btn-1">CHOOSE 1  FOR ME</p>
                </button>
                <button onClick={emptyCart}>
                    <p className="btn-2">CHOOSE AGAIN</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;