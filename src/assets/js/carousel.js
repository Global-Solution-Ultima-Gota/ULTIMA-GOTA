export default function carousel() {
  const carousel_container = document.querySelectorAll(".carousel_container");
  carousel_container?.forEach((container) => {
    const carousel = container.querySelector(".carousel");
    const carousel_items = carousel.querySelectorAll(".carousel_item");
    const prev = container.querySelector(".button.left");
    const next = container.querySelector(".button.right");
    let index = 0;

    const moveCarousel = (index) => {
      carousel_items.forEach((item) => {
        item.style.transform = `translateX(calc(-${index * 100}% - ${index * 1}rem))`;
      });
    };

    prev.addEventListener("click", () => {
      index--;
      if (index < 0) {
        index = carousel_items.length - 1;
      }
      moveCarousel(index);
    });

    next.addEventListener("click", () => {
      index++;
      if (index > carousel_items.length - 1) {
        index = 0;
      }
      moveCarousel(index);
    });

    moveCarousel(index);
  });
}
