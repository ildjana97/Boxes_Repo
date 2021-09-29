import React, { useState } from "react";
/*import plus from "./images/plus.png";
import minus from "./images/minus.png";*/
import "./Boxes.css";

const Boxes = () => {
  let [counter, setCounter] = useState(1);

  function incrementCounter() {
    counter = counter + 1;
    setCounter(counter);
  }
  function decrementCounter() {
    counter = counter - 1;
    setCounter(counter);
  }
  return (
    <div className="boxes-button">
      <div className="boxes">
        <div className="box1">{counter}</div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
        <div className="box5"></div>
      </div>
      <div className="buttons">
        <button id="add" onclick={incrementCounter} className="btn-increment">
          +{/*  <img src={plus} alt="Plus" />*/}
        </button>
        <button
          id="substract"
          onclick={decrementCounter}
          className="btn-decrement"
        >
          -{/* <img src={minus} alt="Minus" />*/}
        </button>
      </div>
    </div>
  );
};

export default Boxes;
