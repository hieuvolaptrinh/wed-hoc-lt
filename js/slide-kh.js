let prev = document.getElementById("prev");
let next = document.getElementById("next");

next.onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]); // appendChild  để thêm một nút (node) vào cuối danh sách các con của một nút cha đã chỉ định.
  // lấy item đầu bỏ vào sau để dẩy phần tử thứ 2 ra trước
};
prev.onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]); // thêm vào đầu ds
  // lấy item cuối bỏ ra trước
};
// tự chuyển
function refreshSlider() {
    next.click();
}
setInterval(refreshSlider, 7000);

// let refreshSlider = setInterval(() => {
//     next.click();
//   }, 5000);