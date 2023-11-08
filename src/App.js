import React, { useState, useEffect } from 'react';
import './App.scss';
import Buttons from './Buttons';

function App () {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const ops = ['/', '*', '-', '+', '.'];

  useEffect(() => {
    const handleKeyDown = (e) => {
      handleClick({key: e.key});
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  function handleClick(e) {
    // If target exists: take clicked key, otherwise take pressed key
    let clickedKey = e.target ? e.target.innerHTML : e.key;

    // Check if the key pressed is a valid input
    if (!/[0-9+\-*/.=C]/.test(clickedKey)) {
      return;
    }
    
    if (
      (ops.includes(clickedKey) && display === '')  || 
      (ops.includes(clickedKey) && ops.includes(display.slice(-1))) || 
      (display === '' && clickedKey === "0")
      ) 
      {return;}
    if (clickedKey === "C") {
      setDisplay("");
      setResult("");
      return;
    }
    if (clickedKey === "+/-") {
      // If display is not 0, give opposite value, stringify is for display.slice
      if (display !== "") {
        setDisplay((display * -1).toString());
        setResult((display * -1).toString());
        return;
      }
    }
    if (clickedKey === "=") {
      setDisplay(result);
      return;
    }
    setDisplay(display + clickedKey);

    if (!ops.includes(clickedKey)) {
      let result = eval(display + clickedKey);
      let formattedResult = Number(result.toFixed(2));
      setResult(formattedResult.toString())
    }
  }

  return (
    <>
      <div id="calculator">
        <div id="display">
          {result ? <span>({result})</span> : ""}
          {display || "0"}
        </div>
        <div id="button-container">
          <Buttons onClick={handleClick} />
        </div>
      </div>
    </>
  )
};

export default App;
