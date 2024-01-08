/* eslint-disable no-eval */
import { useState, useEffect } from "react"
import "./Calculator.scss"
import Buttons from "../Buttons"

export default function Calculator() {
  const [display, setDisplay] = useState("")
  const [tempDisplay, setTempDisplay] = useState("")
  const ops = ["/", "*", "-", "+", "."]
  const specialCharacters = ["Backspace", "+/-", "%"]
  const clearKeys = ["c", "C"]

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!/([0-9+\-*/.=]|Enter|Backspace|\bC\b|\bc\b)/.test(e.key)) {
        return
      }
      handleValue(e.key)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  })

  function clearDisplay(key) {
    if (key) {
      setDisplay(0 + key)
      setTempDisplay(0 + key)
      return
    }

    setDisplay("")
    setTempDisplay("")
  }

  function checkOps(key) {
    return ops.includes(key)
  }

  function handleBackspace() {
    if (!display) return
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1))
    setTempDisplay(display.slice(0, -1))
  }

  function handlePlusMinus() {
    if (!display) return
    setDisplay((display * -1).toString())
    setTempDisplay((display * -1).toString())
  }

  function handlePercentage() {
    if (!display) return
    let percValue = (display / 100).toFixed(4).toString()
    setDisplay(percValue)
    setTempDisplay(percValue)
  }

  function handleDecimal() {
    const numbers = display.split(/[+\-*/]/)
    const lastNumber = numbers[numbers.length - 1]
    if (lastNumber.includes(".")) return
  }

  function handleValue(e) {
    let key = e.target ? e.target.innerHTML : e
    const keyBefore = display.slice(-1)
    if (clearKeys.includes(key) && !display) return
    if (!display && key === "0") return
    if (!display && key === "=") return

    if (display && key.toLowerCase() === "c") {
      return clearDisplay()
    }

    // Empty display with ops
    if (!display && checkOps(key)) {
      clearDisplay(key)
    }

    if (key === "Backspace") {
      return handleBackspace()
    }
    if (key === "+/-") {
      return handlePlusMinus()
    }
    if (key === "%") {
      return handlePercentage()
    }
    if (key === ".") {
      return handleDecimal()
    }

    // 5 * - + 5 === 10
    // 5 * - 5 === -25

    if (checkOps(key) && checkOps(keyBefore)) {
      const twoKeysBefore = display.slice(-2, -1)

      if (key === "-" && keyBefore !== "-") {
        return setDisplay((display) => display + key)
      }

      if (key !== "-" && keyBefore === "-" && checkOps(twoKeysBefore)) {
        // Replace last 2 indexes with the last key
        return setDisplay(display.slice(0, -2) + key)
      }

      return setDisplay(display.slice(0, -1) + key)
    }

    // Set display to tempdisplay when = or enter is pressed
    if (key === "=" || key === "Enter") return setDisplay(tempDisplay)

    if (!checkOps(key)) {
      // Set tempdisplay if key is a number (if operation is finished)
      let calcResult = eval(display + key)
      let formattedResult = Number(calcResult.toFixed(4))
      setTempDisplay(formattedResult.toString())
    }

    setDisplay((prevDisplay) => prevDisplay + key)
  }

  return (
    <div id="calculator">
      <div id="display-container">
        {tempDisplay ? <p id="temp-display">({tempDisplay})</p> : ""}
        <p id="display">{display || "0"}</p>
      </div>
      <div id="button-container">
        <Buttons onClick={handleValue} />
      </div>
    </div>
  )
}
