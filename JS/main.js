let time = new Date ();
let hours = time.getHours();
let min = time.getMinutes();
let finished = "انتهى الدوام";
let working = "متاح";
let soon = "متبقي";

let finish3 = document.getElementById("red").style.color="green";
if (hours >= 15 && hours <= 23 || hours == 0) {
    finish3 = "helloworld";
}
if (hours == 14 ) {
    finish3 = "متبقي";
    finish3.style.color="#00ff00";
}
if (hours < 15 && hours >= 8) {
    finish3 = "متاح";
    finish3.style.color="#ff0000";
}
let finish10 = "";
let finish8 = "";
let finish7 = "";