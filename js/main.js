/**
 * A function to leave a message
 */
(function () {
    "use strict";

    let messageElement = document.getElementById('message');

    let now = new Date();
    let timeOfSeconds = now.getSeconds();

    //    let timeOfDay = 9;
    let message = "Mellan 41 och 50 sek";

    if (timeOfSeconds < 10) {
        message = "Mindre än 10 sek";
    } else if (timeOfSeconds < 20) {
        message = "Mindre än 20 sek";
    } else if (timeOfSeconds < 30) {
        message = "Mindre än 30 sek";
    } else if (timeOfSeconds < 40) {
        message = "Mindre än 40 sek";
    } else  {
        message = now;
    }
    messageElement.textContent = message;

    console.log(message);
}());
