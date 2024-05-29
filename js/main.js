// hiện phần đăng nhập và đăng kí zooo
let btnDks = document.querySelectorAll(".js-dk");
let form = document.querySelector(".js-form-dk");
let formDk = document.querySelector(".js-wrapper-dk");
function show() {
  formDk.classList.add("open");
}
for (let btnDK of btnDks) {
  btnDK.addEventListener("click", show);
}
// ấn ra ngoài để nó close form
function close() {
  formDk.classList.remove("open");
}

// ấn ngoài là sẽ tắt mà phải trừ ra nữa chứ ấn bên trong nó cũng xóa mất (xóa nổi bọt đi)
formDk.addEventListener("click", close);

// hàm xóa nổi bọt đi để nó ăn đoạn bên ngoài thôi
// ngừng từ thằng modal container trờ vào
form.addEventListener("click", function (event) {
  event.stopPropagation();
}); //event.stopPropagation():  ngăn chặn sự kiện "click" tiếp tục lan truyền lên các phần tử cha của phần tử hiện tại. 
// Điều này có nghĩa là nếu có bất kỳ phần tử cha nào của form cũng có một sự kiện lắng nghe "click", sự kiện này sẽ không được kích hoạt.

// end
//  phần chữ chạy qua lại
const titles = document.querySelectorAll(".note-title");
function loadtext() {
  titles.forEach(function (title) {
    const text = title.textContent;
    title.textContent = ""; // gắn nội dung trống sau đó mình thêm từng chữ vào

    let index = 0;
    let intervalId;

    function typeEffect() {
      intervalId = setInterval(function () {
        title.textContent += text[index]; // thêm từng ký tự một vào tiêu đề
        index++;
        if (index >= text.length) {
          clearInterval(intervalId); // Dừng interval khi đã thêm hết các ký tự
          setTimeout(function () {
            title.textContent = ""; // Xóa nội dung của tiêu đề
            index = 0;
            typeEffect(); // Gọi lại hàm để bắt đầu lại từ đầu
          }, 3000); // Delay 3s
        }
      }, 100);
    }

    typeEffect(); // Bắt đầu chạy hiệu ứng gõ chữ
  });
}

document.addEventListener("DOMContentLoaded", loadtext);
// Chạy script sau khi trang web đã tải xong
