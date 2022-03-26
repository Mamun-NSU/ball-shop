import React from "react";
import './Answers.css';

const Answers = () => {
    return (
        <div className="answers">
            <hr></hr>
            <div className="answer">
                <h2>What are difference between props vs state in reactjs?</h2>
                <p> <span>Answer:</span>State is a plain JavaScript object used by React to represent an information, On the the other hand React Props are like function arguments in JavaScript and attributes in HTML, It is an object which hold information. Props are commonly immutable, so that we can not able to change props. But, state is the observable object and we can change states data any time. States are used in class components but we can not use props in class components.</p>
            </div>
            <div className="answer">
                <h2>How useState work?</h2>
                <p><span>Answer:</span>setState() is a react's own methods. useState() hook helps us to add state to function component. The useState allows us to declare only one state variable at a time, can declare any kind of state variables and also the useState takes the initial value of the state variable as an argument.</p>
            </div>
            <div className="answer">
                <h2>How react work?</h2>
                <p> <span>Answer:</span> ReactJs is one of the most popular JavaScript libaries which is created by Facebook. In react we can create a representation of a DOM node by declaring the Element function. We can use it to help build single page applications and mobile apps, or to build complex apps React applications typically have a single root DOM node. Rendering an element in the DOM modifies the user interface of the page.</p>
            </div>
        </div>
    );
};

export default Answers;