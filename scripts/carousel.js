// carousel
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

// hover over product
const productHover = (id, src) => {
  document.getElementById(id).src = src;
};

const productStatic = (id, src) => {
  document.getElementById(id).src = src;
};

// pants
const pants = document.querySelector("#pants");
pants.addEventListener("mouseover", () =>
  productHover("pants", "assets/images/pants.gif")
);
pants.addEventListener("mouseout", () =>
  productStatic("pants", "assets/images/pants.png")
);

// t-shirt
const tshirt = document.querySelector("#t-shirt");
tshirt.addEventListener("mouseover", () =>
  productHover("t-shirt", "assets/images/t-shirt.gif")
);
tshirt.addEventListener("mouseout", () =>
  productStatic("t-shirt", "assets/images/t-shirt.png")
);

// sunglasses
const sunglasses = document.querySelector("#sunglasses");
sunglasses.addEventListener("mouseover", () =>
  productHover("sunglasses", "assets/images/sunglasses_colors.png")
);
sunglasses.addEventListener("mouseout", () =>
  productStatic("sunglasses", "assets/images/sunglasses.png")
);

// balaclava
const balaclava = document.querySelector("#balaclava");
balaclava.addEventListener("mouseover", () =>
  productHover("balaclava", "assets/images/balaclava.gif")
);
balaclava.addEventListener("mouseout", () =>
  productStatic("balaclava", "assets/images/balaclava.png")
);
