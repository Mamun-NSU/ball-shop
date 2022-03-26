import React from "react";
import './Ball.css';

const Ball = (props) => {
    const { addToCart, ball } = props;
    const { name, price, image } = ball;


    return (
        <div className="ball">
            <img src={image} alt="" ></img>
            <p className="ball-name">{name}</p>
            <p className="ball-price">Price: ${price}</p>
            <button onClick={() => addToCart(ball)} className="btn-cart">
                Add to Cart
            </button>
        </div>
    );
};

export default Ball;