function calcCanvasSize() {
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set display size (css pixels).
const sizew = 700;
const sizeh = 1970;
canvas.style.width = `${sizew}px`;
canvas.style.height = `${sizeh}px`;

// Set actual size in memory (scaled to account for extra pixel density).
const scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
console.log(devicePixelRatio)
canvas.width = Math.floor(sizew * scale);
canvas.height = Math.floor(sizeh * scale);
console.log(canvas.width)
console.log(canvas.height)

// Normalize coordinate system to use CSS pixels.
ctx.scale(scale, scale);
console.log(ctx + " ctx")

/*
ctx.fillStyle = "#bada55";
ctx.fillRect(10, 10, 300, 300);
ctx.fillStyle = "#ffffff";
ctx.font = "18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
*/

const x = sizew / 2;
const y = sizeh / 2;

//move canvas to the center
const innderWidth = Math.floor(window.innerWidth);
const canvasWidth = sizew; /* in CSS pixels */
console.log(innderWidth + " innderWidth")
console.log(canvasWidth + " canvasWidth")
const leftpadding = Math.floor((innerWidth - canvasWidth) / 2);
canvas.style.left = `${leftpadding}px`;
console.log(leftpadding + " leftpadding")
}

calcCanvasSize()
window.addEventListener('resize',calcCanvasSize)