const menuToggle = document.getElementById("menu-toggle");
const menuItemsParent = document.getElementById("menu-items-parent");
const menuContainer = document.getElementById("menu-container");
const downloadReport = document.getElementById("download-report");

function onToggleMenu() {
  const isOpen = !menuItemsParent.classList.contains("hidden");
  if (isOpen) {
    menuItemsParent.classList.add("hidden");
    menuToggle.textContent = "O";
    menuContainer.classList.add("text-white"); // Add background color when menu is open
    menuContainer.classList.remove("bg-gray-200"); // Remove the background color when menu is closed
  } else {
    menuItemsParent.classList.remove("hidden");
    menuToggle.textContent = "C"; // Cross icon or use &times; for HTML entity
    menuContainer.classList.add("bg-gray-200"); // Add background color when menu is open
    menuContainer.classList.add("text-black"); // Add background color when menu is open
    downloadReport.classList.add("bg-sky-700"); // Add background color when menu is open
    downloadReport.classList.add("text-white"); // Add background color when menu is open
  }
}
menuToggle.addEventListener("click", onToggleMenu);


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });