const productsContainer = document.querySelector('.product-grid');
const loadMoreBtn = document.getElementById('load-more-btn');

// Function to generate a product item
function createProductItem() {
  const productItem = document.createElement('div');
  productItem.classList.add('product-item');
  
  // Create a container for the images
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  
  // Add multiple images to the container
  for (let i = 1; i <= 3; i++) {
    const img = document.createElement('img');
    img.src = `https://via.placeholder.com/300?text=Product+${i}`;
    img.alt = `Product ${i}`;
    imageContainer.appendChild(img);
  }
  
  // Add the image container to the product item
  productItem.appendChild(imageContainer);
  
  // Add buttons for sliding
  const prevBtn = document.createElement('button');
  prevBtn.textContent = 'Prev';
  prevBtn.classList.add('slide-btn');
  prevBtn.addEventListener('click', () => slideImages(imageContainer, 'prev'));
  
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next';
  nextBtn.classList.add('slide-btn');
  nextBtn.addEventListener('click', () => slideImages(imageContainer, 'next'));
  
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons');
  buttonsContainer.appendChild(prevBtn);
  buttonsContainer.appendChild(nextBtn);
  productItem.appendChild(buttonsContainer);

  return productItem;
}

// Function to slide images
function slideImages(container, direction) {
  const images = container.querySelectorAll('img');
  const currentImage = container.querySelector('.current');
  const currentIndex = Array.from(images).indexOf(currentImage);
  
  let newIndex;
  if (direction === 'prev') {
    newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  } else {
    newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  }
  
  currentImage.classList.remove('current');
  images[newIndex].classList.add('current');
}

// Function to load more products
function loadMoreProducts() {
  // Simulating loading of 24 more products
  for (let i = 0; i < 24; i++) {
    const productItem = createProductItem();
    productsContainer.appendChild(productItem);
  }
}

loadMoreBtn.addEventListener('click', loadMoreProducts);






document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("container");
  const toggleBtn = document.getElementById("toggleBtn");
  let containerVisible = false;

  container.style.display = "none"; // Initially hide the container

  toggleBtn.addEventListener("click", function() {
    if (!containerVisible) {
      container.style.display = "grid"; // Show the container
      containerVisible = true;
    } else {
      container.style.display = "none"; // Hide the container
      containerVisible = false;
    }
  });
});




















let cartCount = 0; // Initialize cart count variable

function createProductItem(name, price) {
  const productItem = document.createElement('div');
  productItem.classList.add('product-item');
  productItem.innerHTML = `
    <img src="https://via.placeholder.com/300" alt="Product Image">
    <div class="product-info">
      <h3>${name}</h3>
      <p>Price: $${price}</p>
    </div>
    <div class="buttons">
      <button class="add-to-cart-btn">Dodaj u korpu<i class="fa-solid fa-cart-shopping"></i></button>
      <button class="buy-now-btn">Kupi odma<i class="fa-solid fa-credit-card"></i></button>
    </div>
  `;

  // Get the "Dodaj u korpu" button within the product item
  const addToCartBtn = productItem.querySelector('.add-to-cart-btn');

  // Add click event listener to the "Dodaj u korpu" button
  addToCartBtn.addEventListener('click', function() {
    // Increment cart count
    cartCount++;
    // Update badge count
    updateCartBadge();
  });

  // Get the "Kupi odma" button within the product item
  const buyNowBtn = productItem.querySelector('.buy-now-btn');

  // Add click event listener to the "Kupi odma" button
  buyNowBtn.addEventListener('click', function() {
    // Redirect to product.html
    window.location.href = 'product.html';
  });

  return productItem;
}

// Function to update the cart badge count
function updateCartBadge() {
  const cartBadge = document.querySelector('.badge');
  cartBadge.textContent = cartCount;
}


















// Initial load of products
loadMoreProducts();

// Infinite scroll functionality
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    loadMoreProducts();
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
      category.addEventListener('click', function() {
        if (window.matchMedia("(max-width: 600px)").matches) {
          category.classList.toggle('open');
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const subcategoryItems = document.querySelectorAll('.subcategories span');
    subcategoryItems.forEach(subcategory => {
      subcategory.addEventListener('click', function() {
        // Add temporary class to the clicked subcategory
        subcategory.classList.add('clicked');
        // Remove temporary class after a short delay
        setTimeout(function() {
          subcategory.classList.remove('clicked');
        }, 300);
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.querySelector('.back-to-top-btn');
  
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const sortButton = document.getElementById('sortButton');
    const sortDropdown = document.getElementById('sortDropdown');
  
    sortButton.addEventListener('click', function() {
      sortDropdown.style.display = sortDropdown.style.display === 'block' ? 'none' : 'block';
    });
  
    window.addEventListener('click', function(event) {
      if (!event.target.matches('#sortButton')) {
        sortDropdown.style.display = 'none';
      }
    });
  });

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.user-actions a');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.add('clicked');
      setTimeout(() => this.classList.remove('clicked'), 300);
    });
  });
});

  
  
  
  
//PRODUCTS **************************************************************************



// Function to fetch related products
async function fetchRelatedProducts(category) {
  try {
    // Perform a fetch request to your backend API to get related products based on the category
    const response = await fetch(`your_api_endpoint?category=${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching related products:', error);
    return [];
  }
}

// Function to create HTML elements for a single product
function createProductElement(product) {
  const productItem = document.createElement('div');
  productItem.classList.add('product-item');
  productItem.innerHTML = `
    <img src="${product.image}" alt="Product Image">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
    </div>
    <div class="buttons">
      <button>Dodaj u korpu🛒</button>
      <button class="buy-now-btn">Kupi odma✅</button>
    </div>
  `;
  return productItem;
}

// Function to display related products in the DOM
async function displayRelatedProducts(category) {
  const relatedProductsContainer = document.querySelector('.related-products');

  // Clear previous products
  relatedProductsContainer.innerHTML = '';

  // Fetch related products
  const relatedProducts = await fetchRelatedProducts(category);

  // Create HTML elements for each related product and append them to the container
  relatedProducts.forEach(product => {
    const productElement = createProductElement(product);
    relatedProductsContainer.appendChild(productElement);
  });
}

// Example usage: Display related products for a specific category
const category = 'electronics'; // Replace 'electronics' with the actual category
displayRelatedProducts(category);









//PRODUCTS **************************************************************************
  













 

