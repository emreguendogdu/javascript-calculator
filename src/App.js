/* eslint-disable no-eval */
import { useState, useEffect } from 'react';
import './App.scss';
import Buttons from './Buttons';

function App () {

  const [display, setDisplay] = useState("");
  const [tempDisplay, setTempDisplay] = useState("");
  const ops = ['/', '*','-', '+', '.'];
  const clearKeys = ['c', 'C'];


  useEffect(() => {
    
    const handleKeyDown = (e) => {
      if (!/([0-9+\-*/.=]|Enter|Backspace|\bC\b|\bc\b)/.test(e.key)) {
        return;
      }
      handleValue(e.key);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });


  function handleValue(e) {
  let key = e.target ? e.target.innerHTML : e;
  if (
    (clearKeys.includes(key) && display === '') ||
      // (ops.includes(key) && ops.includes(display.slice(-1))) || 
      (display === '' && key === "0") ||
      (display === '' && key === "=")
    ) {
      return;
    }
 

    // Clear display
    if (display !== "" && key.toLowerCase() === "c") {
      setDisplay("");
      setTempDisplay("");
      return;
    }
    
    // Empty display with ops
    if (display === '' && ops.includes(key)) {
      setDisplay(0 + key);
      setTempDisplay(0 + key);
      return;
    }

  // Delete characters with backspace
  if (key === "Backspace") {
    if (display!== "") {
      setDisplay(prevDisplay => prevDisplay.slice(0, -1));
      setTempDisplay(display.slice(0, -1)); // TODO: Removes the number, not reverses to eval a new math (23 * 3 = 69 -> backspace -> 6)
      return;
    }
    return;
  }

  // Use +/- button to get opposite value
  if (key === "+/-") {
    if (display !== "") {
      setDisplay((display * -1).toString());
      setTempDisplay((display * -1).toString());
      return;
    }
    return;
  } 
  
  // Use % button to get the percentage 
  if (key === "%") {
    if (display !== "") {
      let percValue = (display * 0.01).toFixed(4).toString();
      setDisplay(percValue);
      setTempDisplay(percValue);
      return;
    }
    return;
  }

  // Make number decimal, not works if last number already is decimal 
  if (key === ".") {
  const numbers = display.split(/[+\-*/]/);
  const lastNumber = numbers[numbers.length - 1];
  if (lastNumber.includes(".")) {
    return;
  }
}
// 5 * - + 5 must be 10;
// 5 * - 5 must be -25;

// If last key is ops, and the key before is also ops
  if (ops.includes(key) && ops.includes(display.slice(-1))) {
    if (key === "-" && display.slice(-1) !== "-") {
      setDisplay(display => display + key);
      return;
    } else if (key !== "-" && display.slice(-1) === "-") {
      setDisplay(display.slice(0, -2) + key);
      return;
    } else {
      setDisplay(display.slice(0, -1) + key);
      return;
    }
    // Slice the old one, add the new one
    
  }

  // Set display to tempdisplay when = or enter is pressed
  if (key === "=" || key === "Enter") {
    setDisplay(tempDisplay);
    return;
  }

  // Set tempdisplay if key is a number (if operation is finished)
  else if (!ops.includes(key)) {
    let calcResult = eval(display + key);
    let formattedResult = Number(calcResult.toFixed(4));
    setTempDisplay(formattedResult.toString())
  }
  
  setDisplay(prevDisplay => prevDisplay + key);
  
  }

  
  return (
    <>
      <div id="calculator">
        <div id="display-container">
          {tempDisplay ? <span>({tempDisplay})</span> : ""}
          <p id="display">{display || "0"}</p>
        </div>
        <div id="button-container">
          <Buttons onClick={handleValue} />
        </div>
      </div>
    </>
  )
};

export default App;
