import React, { useState } from 'react';
function Calculator() {
  // Declare a new state variable for display
  // display can potentially show Input2 or Input2 values
   const [display, setDisplay] = useState(0);
   // Input 1 will handle first numeric value added before operator is clicked

   const [input1Value, setInput1Value] = useState(0);
   const [input2Value, setInput2Value] = useState(0);
   const [operator1Value, setOperator1Value] = useState("");
   const [operator2Value, setOperator2Value] = useState("");

   // Soon: add state for Input1, Operator1, Input2 and Operator2
   //const [input1Value, setInput1Value] = useState(0);

  return ( 
      <div>
        <input id="display" type='text' value={display} readOnly></input>
          <div>
            <div>
            <span className='btn' onClick={() => handleNumberClick(9)}>9</span>
            <span className='btn' onClick={() => handleNumberClick(8)}>8</span>
            <span className='btn' onClick={() => handleNumberClick(7)}>7</span>
            <span className='btn' onClick={() => handleOperatorClick("+")}>+</span>
            </div>
            <div>
            <span className='btn' onClick={() => handleNumberClick(6)}>6</span>
            <span className='btn' onClick={() => handleNumberClick(5)}>5</span>
            <span className='btn' onClick={() => handleNumberClick(4)}>4</span>
            <span className='btn' onClick={() => handleOperatorClick("-")}>-</span>
            </div>
            <div>
            <span className='btn' onClick={() => handleNumberClick(3)}>3</span>
            <span className='btn' onClick={() => handleNumberClick(2)}>2</span>
            <span className='btn' onClick={() => handleNumberClick(1)}>1</span>
            <span className='btn' onClick={() => handleOperatorClick("*")}>*</span>
            </div>
            <div>
            <span className='btn' onClick={() => handleNumberClick(0)}>0</span>
            <span className='btn' onClick={() => handleDecimalClick()}>.</span>
            <span className='btn' onClick={() => handleEqualSignClick()}>=</span>
            <span className='btn' onClick={() => handleOperatorClick("/")}>/</span>
            </div>
            <div>
            <span className='btn' onClick={() => handleClearClick()}>AC</span>
            </div>
          </div>
      </div>

    );

    function handleNumberClick(num) {

      // Appends digits to number value
      // Might of handled differently if calculator had parentheses for order of operations
     
      if (operator1Value === "") {
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
      if (operator1Value === "") 
        setOperator1Value(op);
    }
    
    function handleClearClick() {
      setInput1Value(0);
      setInput2Value(0);
      setOperator1Value("");
      setDisplay(0);
    }

   function  handleEqualSignClick() {
      alert("Equals");
      if (operator1Value !== "") {
        alert("ret1");
        const retNum = eval(input1Value + operator1Value + input2Value);
        alert("ret2");
        setDisplay(retNum);
     }
   }
  }
  export default Calculator;