import React, { useEffect, useState } from "react";
import Ball from "../Ball/Ball";
import './Balls.css';

const Balls = () => {
    const [balls, setBalls] = useState([]);

    useEffect(() => {
        fetch('balldata.json')
            .then(res => res.json())
            .then(data => setBalls(data))
    }, [])
    return (
        <div className="full-container">
            <div className="balls-container">
                {
                    balls.map(ball => <Ball
                        key={ball.id}
                        ball={ball}
                    ></Ball>)
                }
            </div>
            <div className="cart-container">
                <h2>This is cart </h2>
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