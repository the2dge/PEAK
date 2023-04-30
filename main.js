const navbarToggle = navbar.querySelector('#navbar-toggle');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 
'true';

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};

navbarToggle.addEventListener('click', toggleNavbarVisibility);

const navbarMenu = document.querySelector('#navbar-menu');
const navbarLinksContainer = navbarMenu.querySelector('.navbar-links');

navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
navbarMenu.addEventListener('click', toggleNavbarVisibility);

document.addEventListener('DOMContentLoaded', function() {
  const searchBox = document.getElementById('search-box');
  searchBox.addEventListener('input', searchImages);
});

function searchImages() {
  const searchTerm = document.getElementById("search-box").value.toLowerCase();
  const images = document.querySelectorAll(".activity-child img");

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const altText = img.getAttribute("alt").toLowerCase();

    if (altText.includes(searchTerm)) {
      img.parentElement.style.display = "block";
    } else {
      img.parentElement.style.display = "none";
    }
  }
}


