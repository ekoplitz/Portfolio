"use strict"

var selectedButton = null;
$(function () {
    $('#HomeButton').click(function () { deselectButton() });
});

function onButtonPressed(buttonId) {
    var pressedButton = document.getElementById(buttonId);
    setSelectedButton(pressedButton);
}

function deselectButton() {
    if (selectedButton != null) {
        selectedButton.style = "button.textbutton";
        selectedButton = null;
        cubeState = 0;
    }
}

function setSelectedButton(button) {

    // Select new button
    if (button != null) {
        if (selectedButton == button) {
            deselectButton();
        }
        else {
            deselectButton();
            button.style.color = "tomato";
            button.style.transform = "perspective(1px) translate(10%, 0%)";

            selectedButton = button;
            cubeState = 1;
        }
    }
}