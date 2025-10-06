// Function to calculate and update total price
function updateTotal() {
  let total = 0;
  const allCardBodies = document.querySelectorAll('.card-body');
  
  allCardBodies.forEach(cardBody => {
    const quantityElement = cardBody.querySelector('.quantity');
    const unitPriceElement = cardBody.querySelector('.unit-price');
    
    if (quantityElement && unitPriceElement) {
      const quantity = parseInt(quantityElement.textContent) || 0;
      const unitPriceText = unitPriceElement.textContent;
      const unitPrice = parseFloat(unitPriceText.replace('$', '').trim()) || 0;
      
      total += quantity * unitPrice;
    }
  });
  
  const totalElement = document.querySelector('.total');
  if (totalElement) {
    totalElement.textContent = total.toFixed(2) + ' $';
  }
}

// Use event delegation on the parent container
const listProducts = document.querySelector('.list-products');

if (listProducts) {
  listProducts.addEventListener('click', function(event) {
    const target = event.target;
    
    // Find the closest card-body parent
    const cardBody = target.closest('.card-body');
    
    if (!cardBody) return;
    
    const quantityElement = cardBody.querySelector('.quantity');
    const unitPriceElement = cardBody.querySelector('.unit-price');
    
    // Handle Plus button click
    if (target.classList.contains('fa-plus-circle')) {
      if (quantityElement) {
        let quantity = parseInt(quantityElement.textContent) || 0;
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
      }
    }
    
    // Handle Minus button click
    else if (target.classList.contains('fa-minus-circle')) {
      if (quantityElement) {
        let quantity = parseInt(quantityElement.textContent) || 0;
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotal();
        }
      }
    }
    
    // Handle Delete button click
    else if (target.classList.contains('fa-trash-alt')) {
      if (quantityElement) {
        // Reset quantity to 0
        quantityElement.textContent = '0';
        updateTotal();
      }
    }
    
    // Handle Heart (Like) button click
    else if (target.classList.contains('fa-heart')) {
      if (target.style.color === 'red') {
        target.style.color = '';
        target.style.fontWeight = 'normal';
      } else {
        target.style.color = 'red';
        target.style.fontWeight = 'bold';
      }
    }
  });
}

// Initialize total on page load
document.addEventListener('DOMContentLoaded', function() {
  updateTotal();
  
  // Make sure all hearts start with default styling
  const allHearts = document.querySelectorAll('.fa-heart');
  allHearts.forEach(heart => {
    heart.style.cursor = 'pointer';
    heart.style.transition = 'all 0.3s';
  });
  
  // Add cursor pointer to all interactive icons
  const allIcons = document.querySelectorAll('.fa-plus-circle, .fa-minus-circle, .fa-trash-alt');
  allIcons.forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.style.transition = 'transform 0.2s';
  });
  
  // Add hover effect to icons
  listProducts.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('fa-plus-circle') || 
        event.target.classList.contains('fa-minus-circle') || 
        event.target.classList.contains('fa-trash-alt') ||
        event.target.classList.contains('fa-heart')) {
      event.target.style.transform = 'scale(1.2)';
    }
  });
  
  listProducts.addEventListener('mouseout', function(event) {
    if (event.target.classList.contains('fa-plus-circle') || 
        event.target.classList.contains('fa-minus-circle') || 
        event.target.classList.contains('fa-trash-alt') ||
        event.target.classList.contains('fa-heart')) {
      event.target.style.transform = 'scale(1)';
    }
  });
});

// Alternative: If DOMContentLoaded already fired
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateTotal);
} else {
  updateTotal();
}