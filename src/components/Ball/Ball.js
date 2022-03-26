import React from "react";
import './Ball.css';

const Ball = (props) => {
    console.log(props);
    const { name, price, image } = props.ball;
    return (
        <div className="ball">
            <img src={image} alt="" ></img>
        </div>
    );
};

export default Ball;