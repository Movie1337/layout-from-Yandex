if (window.screen.width <= 375) {
  let position = 0;
  const slidesToShow = 1;
  const slidesToScroll = 1;
  const container = document.querySelector(".slider-container");
  const track = document.querySelector(".slider-footer-cards");
  const btnPrev = document.querySelector(".footer-left-button");
  const btnNext = document.querySelector(".footer-right-button");
  const items = document.querySelectorAll(".slider-footer-card");
  const itemsCount = items.length;
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnNext.addEventListener("click", () => {
    const itemsLeft =
      itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener("click", () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disebled = position === 0;
    btnNext.disebled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };

  checkBtns();
} else {
  let position = 0;
  const slidesToShow = 3;
  const slidesToScroll = 1;
  const container = document.querySelector(".slider-container");
  const track = document.querySelector(".slider-footer-cards");
  const btnPrev = document.querySelector(".footer-left-button");
  const btnNext = document.querySelector(".footer-right-button");
  const items = document.querySelectorAll(".slider-footer-card");
  const itemsCount = items.length;
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnNext.addEventListener("click", () => {
    const itemsLeft =
      itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener("click", () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disebled = position === 0;
    btnNext.disebled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };

  checkBtns();
}