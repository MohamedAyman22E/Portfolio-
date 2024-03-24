// icon in header
let iconHeader = document.querySelectorAll(".icon-header li");
iconHeader.forEach(e => {
  e.addEventListener("click", () => {
    iconHeader.forEach(ele => {
      ele.classList.remove("active");
      e.classList.add("active");
    });
  });
});
// icon in product
let iconProduct = document.querySelectorAll(".ProductLinks li");
iconProduct.forEach(e => {
  e.addEventListener("click", () => {
    iconProduct.forEach(ele => {
      ele.classList.remove("active");
      e.classList.add("active");
    });
  });
});
// header
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("active", scrollY > 10);
});
// icon top

let iconTop = document.querySelector(".icon-top");
window.addEventListener("scroll", () => {
  iconTop.classList.toggle("active", scrollY > 10);
});

iconTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
// nav list
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menuBtn");
let menuBtnI = document.querySelector(".menuBtn i");
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
