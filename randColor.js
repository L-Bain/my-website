items = document.getElementsByClassName("item");
let r = 255;
let g = 255;
let b = 255;

let screen_width = document.body.clientWidth;

function generateColor() {
    r = Math.max(50, Math.floor(Math.random() * 255));
    g = Math.max(50, Math.floor(Math.random() * 255));
    b = Math.max(50, Math.floor(Math.random() * 255));
    return("rgb(" + r + "," + g + "," + b + ")");
}

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