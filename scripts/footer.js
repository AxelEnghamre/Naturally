const footerArticles = document.querySelectorAll("footer section article");

footerArticles.forEach((artcile) => {
  artcile.addEventListener("click", () => {
    const ul = artcile.querySelector("ul");
    ul.classList.toggle("h-0");
  });
});
