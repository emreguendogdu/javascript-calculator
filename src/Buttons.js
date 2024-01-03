import React from "react"

export default class Buttons extends React.Component {
  state = {
    buttons: [
      // {id: "divide", text: "÷" , className: "ops"}, // TODO:  Find a way to display ÷ but not get an UTF error.
      { id: "divide", text: "/", className: "ops" },
      { id: "percentage", text: "%" },
      { id: "plusminus", text: "+/-" },
      { id: "clear", text: "C" },
      { id: "multiply", text: "*", className: "ops" },
      { id: "nine", text: "9" },
      { id: "eight", text: "8" },
      { id: "seven", text: "7" },
      { id: "add", text: "+", className: "ops" },
      { id: "six", text: "6" },
      { id: "five", text: "5" },
      { id: "four", text: "4" },
      { id: "subtract", text: "-", className: "ops" },
      { id: "three", text: "3" },
      { id: "two", text: "2" },
      { id: "one", text: "1" },
      { id: "equals", text: "=", className: "ops" },
      { id: "decimal", text: "." },
      { id: "zero", text: "0" },
    ],
  }
  render() {
    const { buttons } = this.state
    return (
      <React.Fragment>
        {buttons.map((button) => {
          return (
            <button
              key={button.id}
              id={button.id}
              onClick={this.props.onClick}
              className={button.className}
            >
              {button.text}
            </button>
          )
        })}
      </React.Fragment>
    )
  }
}
