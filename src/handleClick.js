
export default function handleClick(e) {    
    const display = document.getElementById('display');
    let displayText = display.innerHTML;
    const clickedKey = e.target.innerHTML;

    if (clickedKey === "=") {
    } else if (clickedKey === ".") {
        if (displayText.indexOf(".") === -1) { // Prevent 2 decimals
            displayText += ".";
        }
    }
}