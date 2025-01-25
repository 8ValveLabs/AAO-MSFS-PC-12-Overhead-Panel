function button1On(button) {
    console.log("Button 1 ON", button);
}

function button1Off(button) {
    console.log("Button 1 OFF", button);
}

function button2On(button) {
    document.body.style.backgroundColor = "lightblue";
}

function button2Off(button) {
    document.body.style.backgroundColor = "white";
}

// Ensure functions are globally accessible
window.button1On = button1On;
window.button1Off = button1Off;
window.button2On = button2On;
window.button2Off = button2Off;
