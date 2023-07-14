let title = document.getElementById("larry");

let r = 255;
let g = 255;
let b = 255;

function generateColor() {
  r = Math.max(50, Math.floor(Math.random() * 255));
  g = Math.max(50, Math.floor(Math.random() * 255));
  b = Math.max(50, Math.floor(Math.random() * 255));
  return "rgb(" + r + "," + g + "," + b + ")";
}

// Home screen title font changer
let fontStyle = (element) => {
  element.style.color = generateColor();

  rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      element.style.fontFamily = "Impact, Charcoal,sans-serif";
      break;
    case 1:
      element.style.fontFamily = "Times New Roman, Times, serif";
      break;
    case 2:
      element.style.fontFamily = "Arial, sans-serif";
      break;
    case 3:
      element.style.fontFamily = "Monaco, monospace";
      break;
  }

  rand = Math.floor(Math.random() * 2);
  switch (rand) {
    case 0:
      element.style.fontStyle = "italic";
      break;
    case 1:
      element.style.fontStyle = "normal";
      break;
  }

  rand = Math.floor(Math.random() * 2);
  switch (rand) {
    case 0:
      element.style.fontWeight = "bold";
      break;
    case 1:
      element.style.fontWeight = 500;
      break;
  }
};
setInterval(fontStyle, 2000, title);
