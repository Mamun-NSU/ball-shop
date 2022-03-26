import React from "react";
import './Ball.css';

const Ball = (props) => {
    console.log(props);
    const { name, price, image } = props.ball;
    return (
        <div className="ball">
            <img src={image} alt="" ></img>
            <p className="ball-name">{name}</p>
            <p className="ball-price">{price}</p>
            <button className="btn-cart">
                Add to Cart
            </button>
        </div>
    );
};

export default Ball;