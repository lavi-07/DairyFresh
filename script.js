// Product Data
const products = [
  {
    id: 1,
    name: 'Fresh Milk',
    category: 'Milk',
    price: '₹60 / Litre',
    image: 'product pics/fresh milk.jpg',
    description: 'Pure and fresh cow milk',
    info: 'High-protein farm-fresh milk, rich in calcium and vitamin D.',
    size: '1 Litre carton',
    bestFor: 'Morning cereals, tea, and daily drinking'
  },
  {
    id: 2,
    name: 'Butter',
    category: 'Milk Products',
    price: '₹120 / Pack',
    image: 'product pics/butter.jpg',
    description: 'Creamy butter from fresh milk',
    info: 'Made from premium cream; spreads smoothly and melts easily.',
    size: '200 g pack',
    bestFor: 'Baking, toast, and rich cooking flavors'
  },
  {
    id: 3,
    name: 'Cheddar Cheese',
    category: 'Cheese',
    price: '₹250 / Kg',
    image: 'product pics/Cheddar Cheese.jpg',
    description: 'Hard cheddar cheese',
    info: 'Aged to perfection with a bold, slightly nutty flavor.',
    size: '250 g block',
    bestFor: 'Sandwiches, burgers, and cheese platters'
  },
  {
    id: 4,
    name: 'Greek Yogurt',
    category: 'Yogurt',
    price: '₹80 / Pack',
    image: 'product pics/Greek Yogurt.jpg',
    description: 'Thick and creamy Greek yogurt',
    info: 'Protein-rich yogurt, perfect for breakfast and smoothies.',
    size: '180 g cup',
    bestFor: 'Smoothies, parfaits, and healthy snacks'
  },
  {
    id: 5,
    name: 'Paneer',
    category: 'Milk Products',
    price: '₹180 / Kg',
    image: 'product pics/paneer.jpg',
    description: 'Fresh Indian cheese (Paneer)',
    info: 'Soft and fresh paneer with a delicate, creamy texture.',
    size: '250 g slab',
    bestFor: 'Curries, grills, and salads'
  },
  {
    id: 6,
    name: 'Mozzarella Cheese',
    category: 'Cheese',
    price: '₹300 / Kg',
    image: 'product pics/Mozzarella Cheese.jpg',
    description: 'Soft mozzarella cheese',
    info: 'Stretchy and melt-ready cheese ideal for pizzas and sandwiches.',
    size: '300 g pack',
    bestFor: 'Pizza, pasta, and cheesy melts'
  },
  {
    id: 7,
    name: 'Low Fat Milk',
    category: 'Milk',
    price: '₹50 / Litre',
    image: 'product pics/Low Fat Milk.jpg',
    description: 'Healthy low fat milk',
    info: 'Reduced-fat milk with the same creamy taste and fewer calories.',
    size: '1 Litre carton',
    bestFor: 'Diet-friendly meals, smoothies, and tea'
  },
  {
    id: 8,
    name: 'Flavored Yogurt',
    category: 'Yogurt',
    price: '₹60 / Cup',
    image: 'product pics/Flavored Yogurt.jpg',
    description: 'Delicious flavored yogurt',
    info: 'Sweet yogurt made with real fruit flavors and natural ingredients.',
    size: '150 g cup',
    bestFor: 'Desserts, snacks, and breakfast bowls'
  },
  {
    id: 9,
    name: 'Ghee',
    category: 'Milk Products',
    price: '₹400 / Litre',
    image: 'product pics/Ghee.jpg',
    description: 'Pure clarified butter (Ghee)',
    info: 'Aromatic ghee with rich buttery flavor ideal for cooking.',
    size: '250 ml jar',
    bestFor: 'Sautéing, roti, and traditional recipes'
  },
  {
    id: 10,
    name: 'Blue Cheese',
    category: 'Cheese',
    price: '₹350 / Kg',
    image: 'product pics/Blue Cheese.jpg',
    description: 'Authentic blue cheese',
    info: 'Creamy blue cheese with a bold, tangy flavor and rich texture.',
    size: '200 g wedge',
    bestFor: 'Salads, dressings, and gourmet plates'
  },
  {
    id: 11,
    name: 'Toned Milk',
    category: 'Milk',
    price: '₹45 / Litre',
    image: 'product pics/Toned Milk.jpg',
    description: 'Nutritious toned milk',
    info: 'Light milk with balanced nutrition and a smooth, fresh taste.',
    size: '1 Litre carton',
    bestFor: 'Daily use, cereals, and light meals'
  },
  {
    id: 12,
    name: 'Plain Yogurt',
    category: 'Yogurt',
    price: '₹50 / Pack',
    image: 'product pics/Plain Yogurt.jpg',
    description: 'Probiotic plain yogurt',
    info: 'Naturally probiotic yogurt that supports digestion and health.',
    size: '250 g pack',
    bestFor: 'Dips, marinades, and desserts'
  }
];

let currentCategory = 'All';
const cart = [];

function displayProducts(filteredProducts) {
  const container = document.getElementById('productsContainer');
  const noResults = document.getElementById('noResults');
  
  if (filteredProducts.length === 0) {
    container.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  container.innerHTML = filteredProducts.map(product => `
    <div class="card">
      <div class="card-image-wrapper">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <button class="image-preview-button" type="button" onclick="event.stopPropagation(); toggleProductPreview(${product.id})" aria-label="Preview ${product.name}">👁</button>
      </div>
      <div class="card-content">
        <h3>${product.name}</h3>
        <div class="category-badge">${product.category}</div>
        <p class="product-description">${product.description}</p>
        <p class="price">${product.price}</p>
        <div class="card-actions">
          <button class="btn" type="button" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
      <div id="product-preview-${product.id}" class="card-preview">
        <div class="preview-header">
          <h4>More details</h4>
          <button class="preview-close" type="button" onclick="toggleProductPreview(${product.id})">×</button>
        </div>
        <p class="product-info">${product.info}</p>
        <ul class="preview-list">
          <li><strong>Category:</strong> ${product.category}</li>
          <li><strong>Price:</strong> ${product.price}</li>
          <li><strong>Size:</strong> ${product.size}</li>
          <li><strong>Best for:</strong> ${product.bestFor}</li>
        </ul>
        <button class="btn" type="button" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

function closeAllPreviews() {
  document.querySelectorAll('.card-preview.open').forEach(panel => panel.classList.remove('open'));
}

function toggleProductPreview(productId) {
  const targetPanel = document.getElementById(`product-preview-${productId}`);
  if (!targetPanel) return;

  const isOpen = targetPanel.classList.contains('open');
  closeAllPreviews();
  if (!isOpen) {
    targetPanel.classList.add('open');
  }
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (!cartCount) return;
  cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  if (!cartItems || !cartTotal) return;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    cartTotal.innerText = '₹0';
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.quantity * parseInt(item.price.replace(/[^0-9]/g, ''), 10), 0);

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <span>${item.quantity} x ${item.price}</span>
      </div>
      <button type="button" onclick="removeFromCart(${item.id})">Remove</button>
    </div>
  `).join('');

  cartTotal.innerText = `₹${total}`;
}

function toggleCart(forceOpen) {
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  if (!cartDrawer || !cartOverlay) return;

  const shouldOpen = forceOpen === true || (!cartDrawer.classList.contains('open') && forceOpen !== false);
  cartDrawer.classList.toggle('open', shouldOpen);
  cartOverlay.classList.toggle('open', shouldOpen);
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty. Add products before checkout.');
    return;
  }

  alert('Order placed! Thank you for shopping with DairyFresh.');
  cart.length = 0;
  updateCartCount();
  renderCart();
  toggleCart(false);
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartCount();
  renderCart();
  showCartMessage(`${product.name} has been added to your cart.`);
}

function showCartMessage(message) {
  const messageBox = document.getElementById('cartMessage');
  if (!messageBox) return;

  messageBox.innerText = message;
  messageBox.classList.add('show');

  clearTimeout(window.cartMessageTimeout);
  window.cartMessageTimeout = setTimeout(() => {
    messageBox.classList.remove('show');
  }, 2500);
}

function removeFromCart(productId) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    updateCartCount();
    renderCart();
  }
}

function filterByCategory(category) {
  currentCategory = category;
  updateFilters();
}

function updateFilters() {
  // Update category buttons
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn => {
    if (btn.textContent === currentCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Filter products
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  let filtered = products;

  if (currentCategory !== 'All') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (searchTerm) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm)
    );
  }

  displayProducts(filtered);
}

// Search functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
  currentCategory = 'All';
  updateFilters();
  // Reset category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.category-btn')[0].classList.add('active');
});

function scrollToProducts() {
  document.getElementById('products').scrollIntoView({
    behavior: 'smooth'
  });
}

// Initialize products and cart on page load
window.addEventListener('DOMContentLoaded', function() {
  displayProducts(products);
  updateCartCount();
  renderCart();
});
