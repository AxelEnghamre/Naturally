const carousel = document.querySelector("#carousel");
const item = document.querySelector("#carousel-item");
const buttonLeft = document.querySelector("#button-left");
const buttonRight = document.querySelector("#button-right");

buttonRight.addEventListener("click", () => {
  const itemWidth = item.clientWidth;
  carousel.scrollTo({
    left: carousel.scrollLeft + itemWidth,
    behavior: "smooth",
  });
});

buttonLeft.addEventListener("click", () => {
  const itemWidth = item.clientWidth;
  carousel.scrollTo({
    left: carousel.scrollLeft - itemWidth,
    behavior: "smooth",
  });
});
