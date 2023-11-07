import React from 'react';
import './App.scss';
import Button from './Button';
// const values = ["0, 1, 2, 3, 4, 5, 6, 7, 8, 9, C, +, -, x, =, /, ."]
// const buttonsRegex = /\d|-|\+|=|C|\.|\/|\*|x/gi;

export default function App() {
  return (
    <>
    <div id="calculator-container">
      <div id="calculator">
        <p id="display">hey</p>
        <div id="button-container">
          <Button id="clear" text="C"/>
          <Button id="divide" text="/"/>
          <Button id="multiply" text="*"/>
          <Button id="subtract" text="-"/>
          <Button id="add" text="+"/>
          <Button id="equals" text="="/>
          <Button id="zero" text="0"/>
          <Button id="one" text="1"/>
          <Button id="two" text="2"/>
          <Button id="three" text="3"/>
          <Button id="four" text="4"/>
          <Button id="five" text="5"/>
          <Button id="six" text="6"/>
          <Button id="seven" text="7"/>
          <Button id="eight" text="8"/>
          <Button id="nine" text="9"/>
          <Button id='decimal' text='.'/>
          </div>
      </div>
    </div>
    </>
  );
}