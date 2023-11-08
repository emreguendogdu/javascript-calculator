/* eslint-disable no-eval */
import React, { useState, useEffect } from 'react';
import './App.scss';
import Buttons from './Buttons';

function App () {

  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const ops = ['/', '*', '-', '+', '.', "C"];

  useEffect(() => {
    
    const handleKeyDown = (e) => {
      if (!/([0-9+\-*/.=Cc]|Enter|Backspace)/.test(e.key) || e.key === "Control") {
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
    (ops.includes(key) && display === '')  || 
    (ops.includes(key) && ops.includes(display.slice(-1))) || 
    (display === '' && key === "0") ||
    (display === '' && key === "= ")
    ) 
    {return;}

  if ((display !== "" && key.toLowerCase() === "c") ||
  (display !== "" && key === "Backspace")) {
    setDisplay("");
    setResult("");
    return;
  }

  if (key === "+/-") {
    if (display !== "") {
      setDisplay((display * -1).toString());
      setResult((display * -1).toString());
      return;
    }
  } 

  if (key === "=" || key === "Enter") {
    setDisplay(result);
    return;
  } else if (!ops.includes(key)) {
    let calcResult = eval(display + key);
    let formattedResult = Number(calcResult.toFixed(2));
    setResult(formattedResult.toString())
  }
  
  setDisplay(prevDisplay => prevDisplay + key);
  }

  
  return (
    <>
      <div id="calculator">
        <div id="display">
          {result ? <span>({result})</span> : ""}
          {display || "0"}
        </div>
        <div id="button-container">
          <Buttons onClick={handleValue} />
        </div>
      </div>
    </>
  )
};

export default App;
