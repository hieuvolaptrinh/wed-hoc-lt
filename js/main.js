let btnDk = document.getElementById("js-dk");
let btnDn = document.getElementById("js-dn");
let formDn = document.querySelector(".js-form-dn");
let formDk = document.querySelector(".js-form-dk");
let wrapperDn = document.querySelector(".js-wrapper-dn");
let wrapperDk = document.querySelector(".js-wrapper-dk");
function showDn() {
  wrapperDn.classList.add("open");
}
function showDk() {
  wrapperDk.classList.add("open");
}
btnDn.addEventListener("click", showDn);
btnDk.addEventListener("click", showDk);
// Ấn ra ngoài để đóng form
function closeDn() {
  wrapperDn.classList.remove("open");
}
function closeDk() {
  wrapperDk.classList.remove("open");
}
// Ngăn chặn sự kiện nổi bọt khi nhấp vào bên trong form
formDn.addEventListener("click", function (event) {
  event.stopPropagation(); // ngăn chặn sự kiện "click" tiếp tục lan truyền lên các phần tử cha của phần tử hiện tại.
});
formDk.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Ấn ra ngoài form để đóng form
wrapperDn.addEventListener("click", closeDn);
wrapperDk.addEventListener("click", closeDk);
//  phần chữ chạy qua lại
let titles = document.querySelectorAll(".note-title");
function loadtext() {
  titles.forEach(function (title) {
    const text = title.textContent;
    title.textContent = ""; // gắn nội dung trống sau đó mình thêm từng chữ vào
    let index = 0;
    let intervalId;
    function typeEffect() {
      intervalId = setInterval(function () {
        title.textContent = title.textContent + text[index]; 
        index++;
        if (index >= text.length) {
          clearInterval(intervalId); // dừng interval khi đã thêm hết các ký tự
          setTimeout(function () {
            title.textContent = "";
            index = 0;
            typeEffect(); // gọi lại hàm để bắt đầu lại từ đầu
          }, 3000);
        }
      }, 100);
    }
    typeEffect();
  });
}
document.addEventListener("DOMContentLoaded", loadtext);
//  web  tải xong => chạy

// load trang
let loadElement = document.getElementById("load");
window.onload = function () {
  // setTimeout(function () {
  //   loadElement.style.display = "none";
  // }, 1000);
  loadElement.style.display = "none";
};

// like,dislike
let likeButton = document.querySelector(".like");
let dislikeButton = document.querySelector(".dislike");
likeButton.addEventListener("click", toggleLike);
dislikeButton.addEventListener("click", toggleDislike);
function toggleLike() {
  likeButton.classList.toggle("active");
  dislikeButton.classList.remove("active");
}
function toggleDislike() {
  dislikeButton.classList.toggle("active");
  likeButton.classList.remove("active");
}
