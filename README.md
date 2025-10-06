# 🛒 Shopping Cart Application

A dynamic and interactive shopping cart built with vanilla JavaScript, HTML, and Bootstrap 5. This project demonstrates DOM manipulation, event handling, and responsive design principles.

## 🌟 Features

- ✅ **Add/Remove Items**: Increase or decrease product quantities with + and - buttons
- ✅ **Delete from Cart**: Remove items from cart (resets quantity to 0)
- ✅ **Like Products**: Toggle favorite items with an interactive heart icon
- ✅ **Real-time Total**: Automatic calculation and display of total price
- ✅ **Responsive Design**: Built with Bootstrap 5 for mobile-friendly layout
- ✅ **Smooth Interactions**: Hover effects and visual feedback on user actions




## 📋 Prerequisites

Before you begin, ensure you have:
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript (for customization)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shopping-cart.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd shopping-cart
   ```

3. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

4. **Access the application**
   - Open your browser and go to `http://localhost:8000`

## 📁 Project Structure

```
shopping-cart/
│
├── index.html          # Main HTML file
├── style.css           # Custom styles (if applicable)
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   ├── baskets.png     # Product image
│   ├── socks.png       # Product image
│   └── bag.png         # Product image
└── README.md           # Project documentation
```

## 💻 Usage

### Basic Operations

1. **Increase Quantity**: Click the ➕ icon to add items to cart
2. **Decrease Quantity**: Click the ➖ icon to remove items (minimum: 0)
3. **Remove from Cart**: Click the 🗑️ icon to reset quantity to 0
4. **Like Product**: Click the ❤️ icon to mark as favorite (toggles red/black)
5. **View Total**: Total price updates automatically based on cart contents

### Code Integration

The shopping cart uses event delegation for optimal performance:

```javascript
// Example: Adding a new product dynamically
const newProduct = `
  <div class="card-body">
    <div class="card" style="width: 18rem">
      <img src="/assets/new-product.png" class="card-img-top" alt="product" />
      <div class="card-body">
        <h5 class="card-title">New Product</h5>
        <p class="card-text">Product description</p>
        <h4 class="unit-price">75 $</h4>
        <div>
          <i class="fas fa-plus-circle"></i>
          <span class="quantity">0</span>
          <i class="fas fa-minus-circle"></i>
        </div>
        <div>
          <i class="fas fa-trash-alt"></i>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </div>
  </div>
`;
```

## 🎨 Customization

### Adding New Products

1. Copy the product card structure from `index.html`
2. Update the image source, title, description, and price
3. The JavaScript will automatically handle the new product

### Styling

- Modify `style.css` to change colors, fonts, and layout
- Bootstrap classes can be customized via Bootstrap variables
- Icon styles use Font Awesome 6.0

### Price Format

To change the currency or format, modify the `updateTotal()` function in `script.js`:

```javascript
totalElement.textContent = total.toFixed(2) + ' $'; // Change currency symbol here
```

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling
- **JavaScript (ES6+)**: Vanilla JS for functionality
- **Bootstrap 5.1.3**: Responsive framework
- **Font Awesome 6.0**: Icon library

### Key JavaScript Features

- **Event Delegation**: Single event listener for all products
- **DOM Manipulation**: Dynamic content updates
- **Event Handling**: Click events for user interactions
- **State Management**: Real-time cart state tracking

### Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (not supported)

## 🐛 Known Issues

- Image paths are relative - ensure assets folder is in the correct location
- Bootstrap script has duplicate `src` attributes in the HTML (line 134-140)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- GitHub:(https://github.com/muoki-anna)


## 🙏 Acknowledgments

- Bootstrap team for the amazing framework
- Font Awesome for the icon library
- All contributors who help improve this project



⭐ If you found this project helpful, please give it a star on GitHub!