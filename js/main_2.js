/**
 * A function to leave a message
 */
(function () {
    "use strict";

    let messageElement = document.getElementById('message');

    let now = new Date();
    let timeOfDay = now.getHours();

    //    let timeOfDay = 9;
    let message = "Gokväll";

    if (timeOfDay < 10) {
        message = "God morgon";
    } else if (timeOfDay < 18) {
        message = "God dag";
    }
    messageElement.textContent = message;

    console.log(message);
}());
