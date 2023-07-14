let tooltip = document.getElementById("tooltip");

let screen_width = document.body.clientWidth;
let screen_height = document.body.clientHeight;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Copy email to clipboard function
async function copyEmail() {
  navigator.clipboard.writeText("lazsnail@gmail.com");
  tooltip.classList.add("show");
  await sleep(4000);
  tooltip.classList.remove("show");
}
