// navbar second
let currentIndex = 0;
const maxIndex = 2;
let track;

function moveCarousel(direction) {
  const cardWidth = track.children[0].offsetWidth + 10;
  if (direction === 1 && currentIndex < maxIndex) {
    currentIndex++;
  } else if (direction === 1 && currentIndex >= maxIndex) {
    currentIndex = 0;
  } else if (direction === -1 && currentIndex > 0) {
    currentIndex--;
  }
  track.style.transform = translateX(`-${currentIndex * cardWidth}px`);
}

document.addEventListener("DOMContentLoaded", function () {
  track = document.getElementById("carouselTrack");

  const dropdownToggles = document.querySelectorAll(
    ".dropdown-submenu > .dropdown-toggle"
  );

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const submenuParent = this.parentElement;
      submenuParent.classList.toggle("show");
    });
  });

  setInterval(() => moveCarousel(1), 3000);
});
// mini carrosel

const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
