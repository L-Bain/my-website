import { generateColor } from "./randColor.js";

let items = document.getElementsByClassName("item");

let screen_width = document.body.clientWidth;

let idx = 0;
function responsiveColor() {
    for (item of items) {
        item.style.backgroundColor = "white";
    }
    items[idx++].style.backgroundColor = generateColor();
    if (idx == 9) {
        idx = 0;
    }
}

if (screen_width > 768) {
    for (item of items) {
        item.style.backgroundColor = "white";
        item.addEventListener(
            "mouseover",
            (event) => {
                if (event.target.style.backgroundColor != "white") {
                    event.target.style.backgroundColor = "white";
                }
                else {
                    event.target.style.backgroundColor = generateColor();
                }
            },
            false
        )
    }
}
else {
    for (item of items) {
        item.style.backgroundColor = "white";
    }
    setInterval(responsiveColor, 2000);
}