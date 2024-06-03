const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItems = movieLists[i].querySelectorAll("img").length;

  arrow.addEventListener("click", () => {
    clickCounter++;
    const maxClicks = imageItems - 4;
    if (clickCounter <= maxClicks) {
      const currentTransform = movieLists[i]
        .computedStyleMap()
        .get("transform")[0].x.value;
      movieLists[i].style.transform = `translateX(${currentTransform - 300}px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0; 
    }
  });
});


/* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
