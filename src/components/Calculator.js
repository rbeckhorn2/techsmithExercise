import React, { useState } from 'react';
function Calculator() {
  // Declare a new state variable for display
  // display can potentially show Input2 or Input2 values
   const [display, setDisplay] = useState(0);
   // Input 1 will handle first numeric value added before operator is clicked

   const [input1Value, setInput1Value] = useState("0");
   // Soon: add state for Input1, Operator1, Input2 and Operator2
   //const [input1Value, setInput1Value] = useState(0);

  return ( 
      <div>
        <input id="display" type='text' value={display} readOnly></input>
        <div>
        <span className='btn' onClick={() => handleNumberClick(9)}>9</span>
        <span className='btn' onClick={() => handleNumberClick(8)}>8</span>
        <span className='btn' onClick={() => handleNumberClick(7)}>7</span>
        </div>
        <div>
        <span className='btn' onClick={() => handleNumberClick(6)}>6</span>
        <span className='btn' onClick={() => handleNumberClick(5)}>5</span>
        <span className='btn' onClick={() => handleNumberClick(4)}>4</span>
        </div>
        <div>
        <div>
        <span className='btn' onClick={() => handleNumberClick(3)}>3</span>
        <span className='btn' onClick={() => handleNumberClick(2)}>2</span>
        <span className='btn' onClick={() => handleNumberClick(1)}>1</span>
        </div></div>
        <div>
        <span className='btn' onClick={() => handleNumberClick(0)}>0</span>
        <span className='btn' onClick={() => handleDecimalClick()}>.</span>
        </div>
      </div>
    );

    function handleNumberClick(num) {

      // Appends digits to number value
      // Might of handled differently if calculator had parentheses for order of operations
      const retNum = display * 10 + num

      setInput1Value(retNum);
      setDisplay(retNum)
    }

    function handleDecimalClick(num) {

      setDisplay(display + ".")
      //Handle non 2 Decimals
    }
  }
  export default Calculator;