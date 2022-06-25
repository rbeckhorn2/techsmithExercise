import React, { useState } from 'react';
function Calculator() {
  // Declare a new state variable for display
   const [display, setDisplay] = useState(0);
   const [input1Value, setInput1Value] = useState("0");
   // Soon: add state for Input1, Operator1, Input2 and Operator2
   //const [input1Value, setInput1Value] = useState(0);

  return ( 
      <div>
        <input id="display" type='text' value={display}></input>
        <div>
        <span class='btn' onClick={() => handleButtonClick("9")}>9</span>
        <span class='btn' onClick={() => handleButtonClick("8")}>8</span>
        <span class='btn' onClick={() => handleButtonClick("7")}>7</span>
        </div>
        <div>
        <span class='btn' onClick={() => handleButtonClick("6")}>6</span>
        <span class='btn' onClick={() => handleButtonClick("5")}>5</span>
        <span class='btn' onClick={() => handleButtonClick("4")}>4</span>
        </div>
        <div>
        <div>
        <span class='btn' onClick={() => handleButtonClick("3")}>3</span>
        <span class='btn' onClick={() => handleButtonClick("2")}>2</span>
        <span class='btn' onClick={() => handleButtonClick("1")}>1</span>
        </div></div>
        <div>
        <span class='btn' onClick={() => handleButtonClick("0")}>0</span>
        <span class='btn' onClick={() => handleButtonClick(".")}>.</span>
        </div>
      </div>
    );

    function handleButtonClick(num) {
      var retNum = display + num
      //setInput1Value(retNum);
      setDisplay(retNum)
    }
  }
  export default Calculator;