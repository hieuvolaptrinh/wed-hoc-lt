let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d"); //phương thức gắn trong canvas để vẽ hình lên nó (2D)
let w,
  h,
  balls = [];
let mouse = { x: undefined, y: undefined };
let rbg = [
  [0, 255, 0],
  [0, 0, 255],
  [255, 0, 0],
  [0, 255, 0],
  [0, 0, 255],
  [255, 222, 77],
  [99, 99, 99],
  [66, 66, 66],
  [54, 73, 212],
  [43, 6, 42],
  [342, 24, 255],
  [124, 123, 23],
];
function init() {
  resizeReset(); // thiết lập kích thước
  animationLoop();
}
function resizeReset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  // w = canvas.width = document.documentElement.clientHeight;
}
function animationLoop() {
  // clearRect là một phương thức xóa đối tượng trong canva
  ctx.clearRect(0, 0, w, h);
  if (mouse.x !== undefined && mouse.y !== undefined) {
    balls.push(new Ball());
  }
  if (balls.length > 200) {
    balls = balls.slice(1);
  }
  drawBalls(); // vẽ hình tròn
  requestAnimationFrame(animationLoop); // requestAnimationFrame lặp lại vòng lặp mượt hơn
}
function drawBalls() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].update(); //cập nhât và vẽ quả bóng qua các lớp có ở
    balls[i].draw();
  }
}
function mouseMove(e) {
  // thiết lập lại kích thước của canvas khi cửa sổ trình duyệt được thay đổi.
  mouse.x = e.clientX;
  mouse.y = e.clientY; //e  toạ độ chuột
}

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
class Ball {
  constructor() {
    //  class  cũng giống như object constructor thôi
    this.x = mouse.x + getRandomInt(-10, 10) + 10;
    this.y = mouse.y + getRandomInt(-10, 10) + 10;
    this.size = getRandomInt(0, 10);
    this.rgb = rbg[getRandomInt(0, rbg.length - 1)];
    this.style = `rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]}, 0.5)`;
  }
  draw() {
    ctx.fillStyle = this.style; // vẽ theo màu ở contructor
    ctx.beginPath(); //phương thức bắt đầu 1 đường vẽ mới
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath(); // phương thức kết thúc đường vẽ
    ctx.fill(); // dán màu vào hình tròn
  }
  update() {
    if (this.size > 0) {
      let s = this.size - 0.1;
      this.size = s <= 0 ? 0 : s;
    }
  }
}
canvas.style.pointerEvents = "none";

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resizeReset);
window.addEventListener("mousemove", mouseMove);
