import React, { useEffect, useState } from "react";
import Ball from "../Ball/Ball";
import Cart from "../Cart/Cart";
import './Balls.css';

const Balls = () => {
    const [balls, setBalls] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('balldata.json')
            .then(res => res.json())
            .then(data => setBalls(data))
    }, []);
    const addToCart = (ball) => {

        const newCart = [...cart, ball];
        setCart(newCart);
    };
    const emptyCart = () => {
        setCart([]);
    };

    const randomGenerator = (a, b) => {
        return Math.random() * (b - a) + a;
    }
    const randomPick = () => {
        const thePick = cart[Math.floor(randomGenerator(1, cart.length)) - 1];
        const myElement = [];
        myElement.push(thePick);
        setCart(myElement);
    }
    return (
        <div className="full-container">
            <div className="balls-container">
                {
                    balls.map(ball => <Ball
                        key={ball.id}
                        ball={ball}
                        addToCart={addToCart}
                    ></Ball>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    emptyCart={emptyCart}
                    randomPick={randomPick}
                ></Cart>
            </div>
        </div>
    );
};

export default Balls;


// import React from "react";

// const Balls = () => {
//     return(
//         <div>

//         </div>
//     );
// };

// export default Balls;