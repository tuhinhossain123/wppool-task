document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuItemsParent = document.getElementById("menu-items-parent");
    const menuClose = document.getElementById("menu-close");
  
    menuToggle.addEventListener("click", function () {
      menuItemsParent.classList.toggle("hidden");
      menuToggle.classList.toggle("active");
    });
  
    menuClose.addEventListener("click", function () {
      menuItemsParent.classList.add("hidden");
      menuToggle.classList.remove("active");
    });
  });



// 

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-scroll', 'text-white');
        navbar.classList.remove('bg-transparent', 'text-black');
    } else {
        navbar.classList.add('bg-transparent', 'text-black');
        navbar.classList.remove('bg-scroll', 'text-white');
    }
});