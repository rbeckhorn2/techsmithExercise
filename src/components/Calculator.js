import React, { useState } from 'react';
function Calculator() {
  // Declare a new state variable for display
  // display can potentially show Input2 or Input2 values
   const [display, setDisplay] = useState(0);
   // Input 1 will handle first numeric value added before operator is clicked

   const [input1Value, setInput1Value] = useState(0);
   const [input2Value, setInput2Value] = useState(0);
   const [operatorValue, setOperatorValue] = useState("");


   // Soon: add state for Input1, Operator1, Input2 and Operator2
   //const [input1Value, setInput1Value] = useState(0);

  return ( 
      <div>
        <input id="display" type='text' value={display} readOnly></input>
          <div>
            <div className="grid-container">
            <div className="grid-item" onClick={() => handleNumberClick(9)}>9</div>
            <div className="grid-item" onClick={() => handleNumberClick(8)}>8</div>
            <div className="grid-item" onClick={() => handleNumberClick(7)}>7</div>
            <div className="grid-item" onClick={() => handleOperatorClick("+")}>+</div>
            <div className="grid-item" onClick={() => handleNumberClick(6)}>6</div>
            <div className="grid-item" onClick={() => handleNumberClick(5)}>5</div>
            <div className="grid-item" onClick={() => handleNumberClick(4)}>4</div>
            <div className="grid-item" onClick={() => handleOperatorClick("-")}>-</div>
            <div className="grid-item" onClick={() => handleNumberClick(3)}>3</div>
            <div className="grid-item" onClick={() => handleNumberClick(2)}>2</div>
            <div className="grid-item" onClick={() => handleNumberClick(1)}>1</div>
            <div className="grid-item" onClick={() => handleOperatorClick("*")}>*</div>
            <div className="grid-item" onClick={() => handleNumberClick(0)}>0</div>
            <div className="grid-item" onClick={() => handleDecimalClick()}>.</div>
            <div className="grid-item" onClick={() => handleEqualSignClick()}>=</div>
            <div className="grid-item" onClick={() => handleOperatorClick("/")}>/</div>
            <div className="item1" onClick={() => handleClearClick()}>AC</div>
            </div>
          </div>
      </div>

    );

    function handleNumberClick(num) {

      // Appends digits to number value
      // Might of handled differently if calculator had parentheses for order of operations
     
      if (operatorValue === "") {
        const retNum = input1Value * 10 + num
        setInput1Value(retNum);
        setDisplay(retNum)

      } else {
        const retNum = input2Value * 10 + num
        setInput2Value(retNum);
        setDisplay(retNum)
      }
    }

    function handleDecimalClick(num) {
      setDisplay(display + ".");
      //Not Implemented Yet;
      //Handle non 2 Decimals
    }

    function handleOperatorClick(op) {
      //alert("Addition");
      if (operatorValue === "") 
        setOperatorValue(op);
    }
    
    function handleClearClick() {
      setInput1Value(0);
      setInput2Value(0);
      setOperatorValue("");
      setDisplay(0);
    }

   function  handleEqualSignClick() {
      if (operatorValue !== "") {
        const retNum = eval(input1Value + operatorValue + input2Value);
        //reset Inputs for further calcs
        setInput1Value(retNum);
        setInput2Value(0);
        setOperatorValue("");
        // return display
        setDisplay(retNum);
     }
   }
  }
  export default Calculator;