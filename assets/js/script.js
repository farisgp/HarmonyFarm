//navbar scroll
const navEl = document.querySelector(".navbar");
const toggleButton = document.getElementById("toggleButton");
const colorDiv = document.getElementById("colorDiv");
let isColorChanged = false;

//navbar scroll change color all media
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1) {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 1) {
    navEl.classList.remove("navbar-scrolled");
  }
});
//image about us
const smallImages = document.querySelectorAll(".small-image");

smallImages.forEach((image) => {
  image.addEventListener("click", () => {
    smallImages.forEach((img) => img.classList.remove("active"));
    image.classList.add("active");
  });
});
//flip card
function flipCard(button) {
  const flipCard = button.closest(".flip-card");
  flipCard.classList.toggle("flipped");
}

// navbar scroll media 768px
document.addEventListener("DOMContentLoaded", function () {
  toggleButton.addEventListener("click", function () {
    if (isColorChanged) {
      colorDiv.style.backgroundColor = "#198754";
      isColorChanged = false;
    } else {
      colorDiv.style.backgroundColor = "#3f9b71";
      isColorChanged = true;
    }
  });
});

//navbar toggle icon change
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("navbarCollapse");
  const toggleIcon = document.getElementById("toggleButton");

  // Event listener saat collapse ditampilkan
  toggleButton.addEventListener("show.bs.collapse", function () {
    toggleIcon.innerHTML = '<i class="bi bi-x" style="font-size: 30px;"></i>';
  });

  // Event listener saat collapse disembunyikan
  toggleButton.addEventListener("hide.bs.collapse", function () {
    toggleIcon.innerHTML = '<span class="navbar-toggler-icon"></span>';
  });
});
