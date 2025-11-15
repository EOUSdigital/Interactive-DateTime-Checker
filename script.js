"use strict;"

document.getElementById("myBtn").addEventListener("click", showDate);
const dateDemo = document.getElementById("demo");

function showDate() {
    let d = new Date();
    dateDemo.innerHTML = `Today date is ${d.toLocaleDateString('en-UK')}, and the local time is ${d.toLocaleTimeString()} !`;
    myBtn.textContent = "Restart";
    myBtn.style.backgroundColor = "#3A258E";
    myBtn.removeEventListener("click", showDate);
    myBtn.addEventListener("click", restartPage);
}

function restartPage() {
    dateDemo.innerHTML = "If you wounder what day is today you can click on the button.";
    myBtn.textContent = "Check";
    myBtn.style.backgroundColor = "";
    myBtn.removeEventListener("click", restartPage);
    myBtn.addEventListener("click", showDate);
}