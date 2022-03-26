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
        // console.log(ball)
        const newCart = [...cart, ball];
        setCart(newCart);
    };
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
                <Cart cart={cart}></Cart>
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