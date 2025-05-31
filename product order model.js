// script.js

// Open Modal
function openModal() {
    document.getElementById('productModal').style.display = 'flex';
  }
  
  // Close Modal
  function closeModal() {
    document.getElementById('productModal').style.display = 'none';
  }
  
  // Increase Quantity
  function increaseQty(id) {
    const element = document.getElementById(id);
    element.innerText = parseInt(element.innerText) + 1;
  }
  
  // Decrease Quantity
  function decreaseQty(id) {
    const element = document.getElementById(id);
    const currentValue = parseInt(element.innerText);
    if (currentValue > 0) {
      element.innerText = currentValue - 1;
    }
  }
  