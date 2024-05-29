let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let active = 0;
let lengthItems = items.length - 1;
//  có 8 item mà chỉ số nó từ 0->7

next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloandSlider();
};

// prev
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  reloandSlider();
};

// xử lý nút dots li;

// forEach là một phương thức của mảng (array) trong JavaScript, được sử dụng để thực hiện một hàm nhất định cho mỗi phần tử của mảng đó. Cú pháp của forEach bao gồm một hàm callback, hàm này có thể nhận từ 1 đến 3 tham số: giá trị phần tử hiện tại, chỉ số của phần tử hiện tại, và chính mảng đó.
dots.forEach((li, key) => {
  //chạy vòng for từng thẻ li để nó lắng nghe sự kiện click
  li.addEventListener("click", function () {
    //key là vị trí tương ứng từng thẻ li
    active = key;
    reloandSlider();
  });
});
// tự động chuyển
let refreshSlider = setInterval(() => {
  next.click();
}, 3000);

//
function reloandSlider() {
  let checkLeft = items[active].offsetLeft;
  console.log(checkLeft);

  // offsetLeft là một thuộc tính trong JavaScript được sử dụng để lấy khoảng cách từ mép trái của một phần tử đến mép trái của phần tử đang được active. Giá trị này được tính bằng đơn vị pixel và chỉ đọc (read-only).

  list.style.left = -checkLeft + "px"; // dịch chuyển 1 khoảng bằng checkLeft nên có dấu âm là đơn vị ngược lại

  // xóa active ở vị trí cũ đi cho nó tương thích với cái slide của mình

  let lastActiveDot = document.querySelector(".slider .dots li.active");

  lastActiveDot.classList.remove("active");

  // gọi lại các dots thêm class
  dots[active].classList.add("active");

  //   xóa hành vi lặp lại sau khi mới chuyển sang slide khác
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {
    next.click();
  }, 5000);
}
//
