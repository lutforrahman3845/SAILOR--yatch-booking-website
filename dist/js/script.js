//Navigation button clike
const navigationBtns = document.querySelectorAll(".nav-btn");
navigationBtns.forEach((navBtn) => {
  navBtn.addEventListener("click", () => {
    navigationBtns.forEach((btn) => {
      btn.classList.remove("actv");
      btn.classList.add("pending");
    });
    navBtn.classList.remove("pending");
    navBtn.classList.add("actv");
    hamburgerNav.classList.add("hidden");
  });
});
// mobile navigation

const hamburgerNav = document.getElementById("hamburger");
const openHamburger = () => {
  hamburgerNav.classList.remove("hidden");
};
const closeHamburger = () => {
  hamburgerNav.classList.add("hidden");
};

// When close the modal then off the video
const modal = document.getElementById("my_modal_3");
const iframe = document.getElementById("youtube_video");

modal.addEventListener("close", () => {
  // Reset iframe src to stop the video
  iframe.src = "";
  iframe.src = "https://www.youtube.com/embed/RktXtegZvNw?si=2-lA-AN0EkWUQTo0";
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".previous"
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  on: {
    slideChange: function () {
      updateActiveSlideTitle();
    },
    transitionEnd: function () {
      updateActiveSlideTitle();
    },
  },
});

function updateActiveSlideTitle() {
  const slides = document.querySelectorAll(".swiper-slide");
  slides.forEach((slide) => {
    const title = slide.querySelector(".title");
    if (slide.classList.contains("swiper-slide-active")) {
      title.classList.remove("hidden");
    } else {
      title.classList.add("hidden");
    }
  });
}
updateActiveSlideTitle();
