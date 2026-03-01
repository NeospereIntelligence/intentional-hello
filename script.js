let count = 0;

function changeMessage() {
    count++;
    document.getElementById("message").innerText =
        "You clicked " + count + " times 🔥";
}
