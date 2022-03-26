import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
                <p className="btn-text">Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Ball;