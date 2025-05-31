const menuOpenButton = document.querySelector("#menu-open-button");
const menucloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle moblie menu vissibility
    document.body.classList.toggle("show-mobile-menu");
})
// close menu when the chose button is clikded
menucloseButton.addEventListener("click", () => menuOpenButton.click());
//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBulletss: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //responsive breakpoints 
    breakpoints: {
      0: {
        slidesperView: 1
      }
      786: {
        slidesperView: 1
      }
      1024: {
        slidesperView: 1
      }
    }
  });