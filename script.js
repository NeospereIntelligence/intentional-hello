document.addEventListener("DOMContentLoaded", function () {

    let count = 0;

    const button = document.getElementById("clickButton");
    const message = document.getElementById("message");

    function updateMessage() {
        message.innerText = "You clicked " + count + " times 🔥";
    }

    button.addEventListener("click", function () {
        count++;
        updateMessage();
    });

});
