"use strict"

var selectedButton = null;

function onButtonPressed(buttonId) {

    var pressedButton = document.getElementById(buttonId);

    //  Do nothing if pressed button is already selected
    if (selectedButton == pressedButton) return;

    // Set pressed button to selected button
    if (selectedButton != null) {
        selectedButton.style = "button.textbutton";
    }
    
    if (pressedButton != null) {
        pressedButton.style.color = "black";
        pressedButton.style.transform = "perspective(1px) translate(10%, 0%)";

    }

    selectedButton = pressedButton;
}