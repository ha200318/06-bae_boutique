
var products = [
    {
        name: "Bae - Mũ bóng chày cotton",
        price: 25000,
        discount: 5,
        size: ["6-9M","9-12M","12-18M","18-24M"],
        gender: "unisex",
        img: "images/c1/mũ_bóng_chày.jpg",
    },
    {
        name: "Bae - Bộ liền penguin",
        price: 279000,
        discount: 5,
        size: ["0-3M","3-6M","6-9M","9-12M","12-18M","18-24M"],
        gender: "unisex",
        img: "images/c1/bộ_liền_penguin.jpg",
    },
    {
        name: "Bae - Áo liền quần mùa đông",
        price: 300000,
        discount: 10,
        size: ["0-3M","3-6M","6-9M","9-12M","12-18M","18-24M"],
        gender: "girl",
        img: "images/c1/bộ_liền_mùa_đông.jpg",
    },
    {
        name: "Bae - Bộ 3 món kèm cà vạt",
        price: 299000,
        discount: 5,
        size: ["9-12M","12-18M","18-24M"],
        gender: "boy",
        img: "images/c1/bộ_3_món.jpg",
    },
    {
        name: "Bae - Bộ liền thân kèm mũ",
        price: 279000,
        discount: 5,
        size: ["0-3M","3-6M","6-9M","9-12M","12-18M","18-24M"],
        gender: "unisex",
        img: "images/c1/bộ_liền_thân.jpg",
    },
    {
        name: "Bae - Mũ len nhung cột dây",
        price: 80000,
        discount: 5,
        size: ["0-3M","3-6M","6-9M","9-12M","12-18M","18-24M"],
        gender: "girl",
        img: "images/c1/mũ_len_nhung.jpg",
    },
    {
        name: "Bae - Bộ liền gấu trúc",
        price: 150000,
        discount: 5,
        size: ["0-3M","3-6M","6-9M","9-12M","12-18M","18-24M"],
        gender: "unisex",
        img: "images/c1/bộ_liền_gấu_trúc.jpg",
    },
    {
        name: "Bae - Bộ váy Giáng sinh",
        price: 600000,
        discount: 10,
        size: ["3-6M","9-12M"],
        gender: "girl",
        img: "images/c1/bộ_váy_giáng_sinh.jpg",
    },
    {
        name: "Bae - Set váy Giáng sinh",
        price: 590000,
        discount: 5,
        size: "18-24M",
        gender: "girl",
        img: "images/c1/set_váy_giáng_sinh.jpg",
    },    
];

/* ------------------------- Tạo các biến cần thiết ------------------------- */
var listProductElement = document.getElementById("listProduct");
var favoritesListElement = document.getElementById("favoritesList");
var searchInputElement = document.getElementById("searchInput");
var sizeFilterElement = document.getElementById("sizeFilter");
var priceFilterElement = document.getElementById("priceFilter");
var sortOrderElement = document.getElementById("sortOrder");
var genderFilterElement = document.getElementById("genderFilter");
/* ------------------------- Tạo các biến cần thiết ------------------------- */

/* ------------------------- Thêm sản phẩm yêu thích ------------------------ */
function addToFavorites(product) {
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.find((item) => item.name === product.name)) {
        favorites.push(product);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Đã thêm vào danh sách yêu thích!");
        displayFavorites();
    } else {
        alert("Sản phẩm đã có trong danh sách yêu thích!");
    }
}
/* ------------------------- Thêm sản phẩm yêu thích ------------------------ */

/* ------------------------- Xóa sản phẩm yêu thích ------------------------- */
function deleteFromFavorites(productName) {
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    var updatedFavorites = favorites.filter((item) => item.name !== productName);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    displayFavorites();
}
/* ------------------------- Xóa sản phẩm yêu thích ------------------------- */
/* ----------------------- Hiển thị sản phẩm yêu thích ---------------------- */
function displayFavorites() {
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favoritesListElement.innerHTML = ""; // Clear the list

    if (favorites.length === 0) {
        // Nếu ko có sp yêu thích nào
        favoritesListElement.innerHTML =
            "<p id='emptyFavoritesMessage'>Chưa có sản phẩm yêu thích nào.</p>";
    } else {
        // nếu có sp yêu thích thì hiển thị
        favorites.forEach(function (product) {
            var listItem = document.createElement("li");
            listItem.innerHTML = `
                    <img width="100px" src="${product.img}" alt="">
                    <span>${product.name}</span>
                    <span>${product.price.toLocaleString()}₫</span>
                    <button class="btn btn-danger delete-btn" onclick="deleteFromFavorites('${product.name
                }')">Xóa</button>
                    `;
            favoritesListElement.appendChild(listItem);
        });
    }
    // Cập nhật số lượng chỗ icon yêu thích trên header
    document.getElementById("favoritesCount").innerText = favorites.length;
}
/* ----------------------- Hiển thị sản phẩm yêu thích ---------------------- */

/* ---------------------------- Hiển thị sản phẩm --------------------------- */
function displayProducts(filteredProducts) {
    listProductElement.innerHTML = ""; // Xóa danh sách sp hiện tại

    // Hiển thị từng sản phẩm
    filteredProducts.forEach(function (product) {
        var discountedPrice =
            product.price - product.price * (product.discount / 100);
        var productHtml = `
            <div class="col-6 col-md-4 col-xl-3">
            <div class="card product-card">
            <img src="${product.img}" class="card-img-top product-image" alt="${product.name
            }">
            <div class="card-body">
            <a href="./product-detail.html"><h5 class="card-title">${product.name
            }</h5></a>
            <div class="box-pro-prices">
            <p class="pro-price-highlight">
            <span style="font-weight: bold; font-size: large;">${discountedPrice.toLocaleString()}₫</span>
                ${product.discount
                ? `<span class="discount">${product.price.toLocaleString()}₫</span>`
                : ""
            }
            </p>
            </div>
            <button class="btn btn-primary buy-now-btn" onclick="addToCart(${JSON.stringify(
                product
            ).replace(/"/g, "&quot;")})">Thêm vào giỏ hàng</button>
            <button class="love" onclick="addToFavorites(${JSON.stringify(
                product
            ).replace(
                /"/g,
                "&quot;"
            )})"><i class="fa-regular fa-heart"></i></button>
            </div>
            </div>
            </div>
            `;
        listProductElement.innerHTML += productHtml;
    });
}
/* ---------------------------- Hiển thị sản phẩm --------------------------- */

/* ---------------------------- Hàm lọc và sắp xếp sản phẩm --------------------------- */
function filterAndSortProducts() {
    var searchQuery = searchInputElement.value.toLowerCase();
    var sizeFilter = sizeFilterElement.value;
    var priceFilter = priceFilterElement.value;
    var sortOrder = sortOrderElement.value;
    var genderFilter = genderFilterElement.value; // Thêm giới tính

    var filteredProducts = products.filter(function (product) {
        return (
            product.name.toLowerCase().includes(searchQuery) &&
            (!sizeFilter || product.size.includes(sizeFilter)) &&
            (priceFilter === "" || product.price <= parseInt(priceFilter)) &&
            (genderFilter === "" || product.gender === genderFilter)
        );
    });

    // Sắp xếp sản phẩm
    filteredProducts = sortProducts(filteredProducts, sortOrder);

    // Hiển thị sản phẩm đã lọc và sắp xếp
    displayProducts(filteredProducts);
}
/* ---------------------------- Hàm lọc và sắp xếp sản phẩm --------------------------- */

/* ---------------------------- Hàm sắp xếp sản phẩm --------------------------- */
function sortProducts(filteredProducts, sortOrder) {
    if (sortOrder === "az") {
        return filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "za") {
        return filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (sortOrder === "asc") {
        return filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
        return filteredProducts.sort((a, b) => b.price - a.price);
    } else {
        return filteredProducts;
    }
}
/* ---------------------------- Hàm sắp xếp sản phẩm --------------------------- */
/* ---------------------------- Tìm kiếm sản phẩm --------------------------- */
function searchProducts() {
    filterAndSortProducts();
}
/* ---------------------------- Tìm kiếm sản phẩm --------------------------- */

/* ------------------------ Thêm sản phẩm vào giỏ hàng ----------------------- */
function addToCart(product) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    var existingProduct = cart.find((item) => item.name === product.name);

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

// Hiển thị tất cả các sp khi trang được tải  
products.forEach(function (product) {
    var discountedPrice =
        product.price - product.price * (product.discount / 100);
    var productHtml = `
        <div class="col-6 col-md-4 col-xl-3">
        <div class="card product-card">
        <img src="${product.img}" class="card-img-top product-image" alt="${product.name
        }">
        <div class="card-body">
        <a href="./${product.name
        }.html"><h5 class="card-title">${product.name
        }</h5></a>
        <div class="box-pro-prices">
        <p class="pro-price-highlight">
        <span style="font-weight: bold; font-size: large;">${discountedPrice.toLocaleString()}₫</span>
        ${product.discount
            ? `<span class="discount">${product.price.toLocaleString()}₫</span>`
            : ""
        }
                  </p>
              </div>
              <button class="btn btn-primary buy-now-btn" onclick="addToCart(${JSON.stringify(
            product
        ).replace(/"/g, "&quot;")})">Thêm vào giỏ hàng</button>
              <button class="love" onclick="addToFavorites(${JSON.stringify(
            product
        ).replace(
            /"/g,
            "&quot;"
        )})"><i class="fa-regular fa-heart"></i></button>
              </div>
              </div>
              </div>
      `;
    listProductElement.innerHTML += productHtml;
});

/* ----------------------- Hiển thị sản phẩm yêu thích ---------------------- */
displayFavorites();
/* ----------------------- Hiển thị sản phẩm yêu thích ---------------------- */
displayCart();

var cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cartsCount").innerText = cart.length;


