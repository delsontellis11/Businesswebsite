function addToCart(item) {
    // Retrieve the cart from local storage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Extract product information from the clicked item
    const productName = item.getAttribute("data-name");
    const productPrice = parseFloat(item.getAttribute("data-price"));
    const productImage = item.getAttribute("data-image");

    // Create a new product object
    const product = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    // Add the product to the cart
    cart.push(product);

    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optionally, you can update the cart display
    updateCartDisplay();
}
