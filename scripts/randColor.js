export function generateColor() {
    let r = Math.max(50, Math.floor(Math.random() * 255));
    let g = Math.max(50, Math.floor(Math.random() * 255));
    let b = Math.max(50, Math.floor(Math.random() * 255));
    return("rgb(" + r + "," + g + "," + b + ")");
}