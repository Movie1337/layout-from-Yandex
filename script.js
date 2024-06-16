let offset = 0;
const sliderLine = document.querySelector(".footer__slider-cards");

document
  .querySelector(".footer__right-button")
  .addEventListener("click", function () {
    offset += 340;
    if (offset > 1020) {
      offset = 0;
    }
    sliderLine.style.left = -offset + "px";
  });

document
  .querySelector(".footer__left-button")
  .addEventListener("click", function () {
    offset -= 340;
    if (offset < 0) {
      offset = 1020;
    }
    sliderLine.style.left = -offset + "px";
  });
