
/* ------------------------ Thêm sản phẩm vào giỏ hàng ----------------------- */
function addToCart(product) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    var existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        // Nếu sản phẩm đã tồn tại, chỉ tăng số lượng
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
    displayCart();
}
/* ------------------------ Thêm sản phẩm vào giỏ hàng ----------------------- */

/* ----------------------------- Xóa sản phẩm khỏi giỏ hàng ----------------------------- */
function removeFromCart(productName) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var updatedCart = cart.filter(item => item.name !== productName);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    displayCart();
}
/* ----------------------------- Xóa sản phẩm khỏi giỏ hàng ----------------------------- */

/* --------------------------- Hiển thị thông tin giỏ hàng -------------------------- */
function displayCart() {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var cartItemsListElement = document.getElementById("cartItemsList");
    var totalAmountElement = document.getElementById("totalAmount");
    cartItemsListElement.innerHTML = ""; // Clear the list

    if (cart.length === 0) {
        // Nếu giỏ hàng trống
        cartItemsListElement.innerHTML = "<p id='emptyCartMessage'>Giỏ hàng trống.</p>";
        totalAmountElement.innerText = "0₫";
    } else {
        // Hiển thị từng sản phẩm trong giỏ hàng
        var totalAmount = 0;
        cart.forEach(function (product) {
            var listItem = document.createElement("li");
            listItem.innerHTML = `
                <img width="100px" src="${product.img}" alt="">
                <span>${product.name}</span>
                <span>${product.price.toLocaleString()}₫</span>
                <span>Số lượng: <button class="quantity-btn" onclick="decreaseQuantity('${product.name}')">-</button> ${product.quantity} <button class="quantity-btn" onclick="increaseQuantity('${product.name}')">+</button></span>
                <button class="btn btn-danger delete-btn" onclick="removeFromCart('${product.name}')">Xóa</button>
            `;
            cartItemsListElement.appendChild(listItem);
            totalAmount += product.price * product.quantity;
        });

        totalAmountElement.innerText = totalAmount.toLocaleString() + "₫";
    }
}

/* --------------------------- Hiển thị thông tin giỏ hàng -------------------------- */

/* ------------------------ Tăng số lượng sản phẩm ----------------------- */
function increaseQuantity(productName) {
    updateQuantity(productName, 1);
}

function decreaseQuantity(productName) {
    updateQuantity(productName, -1);
}

function updateQuantity(productName, change) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var updatedCart = cart.map(function (product) {
        if (product.name === productName) {
            product.quantity += change;
            if (product.quantity < 1) {
                product.quantity = 1;
            }
        }
        return product;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    displayCart(); // Gọi lại hàm displayCart để cập nhật tổng tiền
}



// ... (Trong phần hàm đã định nghĩa)
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
document.getElementById("favoritesCount").innerText = favorites.length;
// Hiển thị thông tin giỏ hàng khi trang được tải
displayCart();
