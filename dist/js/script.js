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
