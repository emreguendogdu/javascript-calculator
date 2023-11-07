import React from 'react';
import './App.scss';
import Buttons from './Buttons';
// const values = ["0, 1, 2, 3, 4, 5, 6, 7, 8, 9, C, +, -, x, =, /, ."]
// const buttonsRegex = /\d|-|\+|=|C|\.|\/|\*|x/gi;

function App () {
  const [display, setDisplay] = React.useState("0");
  
  return (
  <>
  <div id="calculator-container">
    <div id="calculator">
      <div id="display">{display}</div>
      <div id="button-container">
        <Buttons />
        </div>
    </div>
  </div>
  </>
  )
};

export default App;