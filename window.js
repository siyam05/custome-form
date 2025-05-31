/* script.js */
function switchTab(tab) {
    const deliveryTab = document.getElementById("deliveryTab");
    const pickupTab = document.getElementById("pickupTab");
  
    if (tab === "delivery") {
      deliveryTab.classList.add("active");
      pickupTab.classList.remove("active");
    } else {
      pickupTab.classList.add("active");
      deliveryTab.classList.remove("active");
    }
  }
  
  // Close button functionality
  document.getElementById("closeButton").addEventListener("click", function () {
    const orderContainer = document.getElementById("orderContainer");
    orderContainer.style.transform = "translateY(-200%)"; // Smooth transition
    setTimeout(() => {
      orderContainer.style.display = "none";
    }, 300);
  });
  
  // Payment button functionality
  document.querySelector(".payment-btn").addEventListener("click", function () {
    const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
    alert(`You have selected ${selectedPayment} as your payment method.`);
  });
  