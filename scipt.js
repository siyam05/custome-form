// const menuOpenButton = document.querySelector("#menu-open-button");
// const menucloseButton = document.querySelector("#menu-close-button");

// menuOpenButton.addEventListener("click", () => {
//     // Toggle moblie menu vissibility
//     document.body.classList.toggle("show-mobile-menu");
// })

// // close menu when the chose button is clikded

// menucloseButton.addEventListener("click", () => menuOpenButton.click());


// //Initialize Swiperper('.slider-wrapper', {
//     loop: true,
// const swiper = new Swi
//     spaceBetween: 25,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       dynamicBulletss: true,
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     //responsive breakpoints 
//     breakpoints: {
//       0: {
//         slidesperView: 1
//       }
//       786: {
//         slidesperView: 1
//       }
//       1024: {
//         slidesperView: 1
//       }
//     }
//   });
document.addEventListener("DOMContentLoaded", () => {
    const menuOpenButton = document.querySelector("#menu-open-button");
    const menucloseButton = document.querySelector("#menu-close-button");
    const navLinks = document.querySelectorAll(".nav-manu .nav-link");

    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });
     
    // close menu when the close button is clicked
    menucloseButton.addEventListener("click", () => menuOpenButton.click());
  
    navLinks.forEach(link => {
        link.addEventListener("click", () => menuOpenButton.click());
      });
  





      document.addEventListener("DOMContentLoaded", () => {
        const orderButtons = document.querySelectorAll(".order-button");
    
        orderButtons.forEach(button => {
            button.addEventListener("click", () => {
                alert("Your order has been placed!");
            });
        });
    });
    








    document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll(".order-button");
    const modal = document.querySelector("#order-modal");
    const closeModal = document.querySelector("#close-modal");
    const orderForm = document.querySelector("#order-form");
    const productNameInput = document.querySelector("#product-name");
    const productPriceInput = document.querySelector("#product-price");

    // Open modal when "Order Now" is clicked
    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-product");
            const productPrice = button.getAttribute("data-price");

            productNameInput.value = productName;
            productPriceInput.value = productPrice;

            modal.style.display = "flex";
        });
    });

    // Close modal when "X" is clicked
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Submit order form
    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(orderForm);
        const data = Object.fromEntries(formData.entries());

        console.log("Order Details:", data);

        alert("Your order has been placed successfully!");

        modal.style.display = "none";
        orderForm.reset();
    });
});















    // Initializa swiper
    
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 25,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,  // Fix typo here: 'dynamicBulletss' -> 'dynamicBullets'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
             },
            786: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
});
// Select all the stars and add event listeners for rating
const stars = document.querySelectorAll(".star");
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener("click", function() {
        selectedRating = parseInt(star.getAttribute("data-value"));
        updateStarRating();
    });
});

function updateStarRating() {
    stars.forEach(star => {
        if (parseInt(star.getAttribute("data-value")) <= selectedRating) {
            star.classList.add("selected");
        } else {
            star.classList.remove("selected");
        }
    });
}








// This script can be used to add additional interactivity to the footer, such as dynamic year display.
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.querySelector(".footer-bottom span.year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});







document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".offer-card button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Offer added to your cart!");
        });
    });
});



  
