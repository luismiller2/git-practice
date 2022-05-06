console.log("hi");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

const h = canvas.height;
const w = canvas.width;

// x ,y ,width, height
ctx.fillRect(300, 300, 40, 40);

//change color
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 40, 40);
ctx.fillStyle = "blue";
ctx.fillRect(100, 400, 40, 40);

ctx.fillStyle = "yellow";

//draw an outline
ctx.strokeRect(25, 25, 25, 25);

ctx.strokeStyle = "black";
//How to draw with lines
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(230, 230);
ctx.lineTo(230, 180);
ctx.lineTo(260, 160);
ctx.lineTo(210, 150);
ctx.lineTo(190, 100);
ctx.lineTo(170, 150);
ctx.lineTo(120, 160);
ctx.lineTo(150, 180);
ctx.lineTo(150, 230);
ctx.lineTo(200, 200);
ctx.stroke(); //draws the outline
ctx.fill(); //fills in drawing
ctx.closePath();

//draw circles/arcs
ctx.beginPath();
//x, y, radius, startAngle, endAnge
// ctx.fillRect(300, 300, 40, 40);

// //change color
// ctx.fillStyle = "red";
// ctx.fillRect(100, 100, 40, 40);
// ctx.fillStyle = "blue";
// ctx.fillRect(100, 400, 40, 40);

// ctx.fillStyle = "yellow";

// //draw an outline
// ctx.strokeRect(25, 25, 25, 25);

// ctx.strokeStyle = "black";
// //How to draw with lines
// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.lineTo(230, 230);
// ctx.lineTo(230, 180);
// ctx.lineTo(260, 160);
// ctx.lineTo(210, 150);
// ctx.lineTo(190, 100);
// ctx.lineTo(170, 150);
// ctx.lineTo(120, 160);
// ctx.lineTo(150, 180);
// ctx.lineTo(150, 230);
// ctx.lineTo(200, 200);
// ctx.stroke(); //draws the outline
// ctx.fill(); //fills in drawing
// ctx.closePath();

// //draw circles/arcs
// ctx.beginPath();
// //x, y, radius, startAngle, endAnge
// // ctx.arc(400, 100, 30, 0, Math.PI * 2);
// // ctx.stroke();
// // ctx.fillStyle = "purple";
// // ctx.fill();
// // ctx.closePath();

// ctx.arc(400, 100, 30, 0, Math.PI * 2);
// ctx.stroke();
// ctx.fillStyle = "purple";
// ctx.fill();
// ctx.closePath();

ctx.arc(200, 150, 50, 20, Math.PI * 2);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();
let square = {
  x: 30,
  y: 20,
  w: 25,
  h: 25,
  xReverse: false,
  yReverse: false,
};

// ctx.fillRect(square.x, square.y, square.w, square.h);

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, w, h);
  ctx.fillRect(square.x, square.y, square.w, square.h);

//   Collision Detection
//   left wall
  if (square.x + square.w >= w) {
    square.xReverse = true;
  }
//   bottom wall
  if (square.y + square.h >= h) {
    square.yReverse = true;
  }
//   right wall
  if (square.x <= 0) {
      square.xReverse = false;
  }
//   top wall
 if (square.y <= 0){
     square.yReverse = false;
 }

  if (square.yReverse === false) {
    square.y+= 2;
  } else {
    square.y-= 2;
  }
  if (square.xReverse === false) {
    square.x+= 2;
  } else {
    square.x-= 2;
  }
}

animate();
