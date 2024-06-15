
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let refreshSlider; 
next.onclick = function () {
  clearInterval(refreshSlider); // xóa bộ đệm khi nhấn nút "next"
  refreshSlider = setInterval(() => {
    next.click();
  }, 5000);

  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
  // appendChild  thêm  (node) vào cuối danh sách các con của một nút cha đã chỉ định.

};
prev.onclick = function () {
  clearInterval(refreshSlider); 
  refreshSlider = setInterval(() => {
    next.click();
  }, 5000);

  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
  // lấy item cuối bỏ ra trước
};
refreshSlider = setInterval(() => {
  next.click();
}, 5000);
