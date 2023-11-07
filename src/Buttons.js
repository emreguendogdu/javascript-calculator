import HandleClick from "./HandleClick"
import React from "react";

export default class Buttons extends React.Component {
    state = {
        buttons: [
            {id: "clear", text: "C"},
            {id: "divide", text: "/"},
            {id: "multiply", text: "*"},
            {id: "subtract", text: "-"},
            {id: "add", text: "+"},
            {id: "equals", text: "="},
            {id: "zero", text: "0"},
            {id: "one", text: "1"},
            {id: "two", text: "2"},
            {id: "three", text: "3"},
            {id: "four", text: "4"},
            {id: "five", text: "5"},
            {id: "six", text: "6"},
            {id: "seven", text: "7"},
            {id: "eight", text: "8"},
            {id: "nine", text: "9"},
        ] 
    }
    render() {
        const { buttons } = this.state;
        return (
            <React.Fragment>
                {buttons.map(button => {
                    return (
                        <button key={button.id} id={button.id} onClick={this.props.handleClick}>{button.text}</button>
                    )
                })}
            </React.Fragment>
        )
        }
}