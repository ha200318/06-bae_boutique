
/* -------------------------------------------------------------------------- */
/*                                  CODE MỚI                                  */
/* -------------------------------------------------------------------------- */
var products = [
    {
        name: "Bae - Giftset fullmonth for baby girl 01",
        price: 500000,
        discount: 10,
        img: "https://www.bumblesandboo.com/cdn/shop/files/new-mum-baby-girl-hamper-basket.jpg?v=1683103431&width=1080",
        gift: "girl",
    },
    {
        name: "Bae - Giftset fullmonth for baby girl 02",
        price: 600000,
        discount: 10,
        img: "https://www.bumblesandboo.com/cdn/shop/products/baby-girl-hamper-welcome.jpg?v=1674218658&width=1080",
        gift: "girl",
    },
    {
        name: "Bae - Giftset fullmonth for baby girl 03",
        price: 650000,
        discount: 10,
        img: "https://www.bumblesandboo.com/cdn/shop/files/baby-girl-gifts-hamper-bunny-rattle.jpg?v=1699346747&width=1080",
        gift: "girl",
    },
    {
        name: "Bae - Giftset fullmonth for baby girl 04",
        price: 529000,
        discount: 10,
        img: "https://www.bumblesandboo.com/cdn/shop/products/baby-girl-hamper-steiff-bear_2a6e366a-e7d4-45bb-8913-60ba18ceae12.jpg?v=1678362778&width=1080",
        gift: "girl",
    },
    {
        name: "Bae - Giftset fullmonth for baby boy 01",
        price: 390000,
        discount: 10,
        img: "https://www.bumblesandboo.com/cdn/shop/products/Baby-boy-hamper-gift-steiff-bunny.jpg?v=1667323792&width=1080",
        gift: "boy",
    },
    {
        name: "Bae - Giftset fullmonth for baby boy 02",
        price: 599000,
        discount: 10,
        img: "https://www.bumblesandboo.com/cdn/shop/products/baby-boy-gifts-hamper-love-mummy.jpg?v=1674155316&width=1080",
        gift: "boy",
    },
    {
        name: "Bae - Giftset fullmonth for baby boy 03",
        price: 560000,
        discount: 10,
        img: "https://www.bumblesandboo.com/cdn/shop/products/baby-boy-hamper-precious-little-one.jpg?v=1669222252&width=1080",
        gift: "boy",
    },
    {
        name: "Bae - Giftset fullmonth for baby boy 04",
        price: 490000,
        discount: 10,
        img: "https://www.bumblesandboo.com/cdn/shop/products/baby-boy-hamper-welcome.jpg?v=1674216507&width=1080",
        gift: "boy",
    },
    {
        name: "Bae - Giftset fullmonth for morther and baby 01",
        price: 639000,
        discount: 10,
        img: "https://www.bumblesandboo.com/cdn/shop/files/mum-to-be-hamper-basket-bunny.jpg?v=1683650210&width=1080",
        gift:"two",
    }, {
        name: "Bae - Giftset fullmonth for morther and baby 02",
        price: 600000,
        discount: 10,
        img: "https://www.bumblesandboo.com/cdn/shop/files/mum-to-be-hamper-gift-froggin-awesome_5.jpg?v=1683787738&width=1080",
        gift:"two",
    }, {
        name: "Bae - Giftset fullmonth for morther and baby 03",
        price: 539000,
        discount: 10,
        img: "https://www.bumblesandboo.com/cdn/shop/products/mum-to-be-hamper-basket-noughty.jpg?v=1673555947&width=1080",
        gift:"two",
    }, {
        name: "Bae - Giftset fullmonth for morther and baby 04",
        price: 439000,
        discount: 10,
        img: "https://www.bumblesandboo.com/cdn/shop/products/mum-to-be-hamper-box-cook-voucher.jpg?v=1674503395&width=1080",
        gift:"two",
    },

];

/* ------------------------- Tạo các biến cần thiết ------------------------- */
var listProductElement = document.getElementById("listProduct");
var favoritesListElement = document.getElementById("favoritesList");
var searchInputElement = document.getElementById("searchInput");
var giftElement = document.getElementById("gift");
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
            <div class="card product-card" style="max-width: 90%;>
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
}
/* ---------------------------- Hiển thị sản phẩm --------------------------- */

/* ---------------------------- Hàm lọc và sắp xếp sản phẩm --------------------------- */

  function filterProduct(category) {
    //Lấy phần tử đã được hiển thị
    const listProduct = document.getElementById('listProduct');
    listProduct.innerHTML = ''; // Xóa các thẻ sản phẩm trước đó
  
    let filteredProducts = [];
  
    if (category === 'all') {
      filteredProducts = products; //Nếu là all thì in ra tất cả sản phẩm
    } else {
      filteredProducts = products.filter(product => product.gift === category);//in ra sp theo loại
    }
  
    filteredProducts.forEach(product => {
      const discountedPrice = product.price * (1 - product.discount / 100);
      const productCard = `
      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <div class="card product-card">
        <img src="${product.img}" class="card-img-top product-image" alt="${product.name}">
        <div class="card-body">
          <a href="./${product.name
          }.html"><h5 class="card-title">${product.name}</h5></a>
          <div class="box-pro-prices">
            <p class="pro-price-highlight">
              <span style="font-weight: bold; font-size: large;">${discountedPrice.toLocaleString()}₫</span>
              ${product.discount ? `<span class="discount">${product.price.toLocaleString()}₫</span>` : ""}
            </p>
          </div>
          <div class="row">
            <div class="col-8" style="text-align: left;">
              <button class="btn buy-now-btn" onclick="addToCart(${JSON.stringify(product).replace(/"/g, "&quot;")})">Thêm vào giỏ hàng</button>
            </div>
            <div class="col-4 fs-2" style="color: #8295A1; text-align: end;">
              <button class="love fs-2" onclick="addToFavorites(${JSON.stringify(product).replace(/"/g, "&quot;")})">
                <i class='bx bx-heart'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
      listProduct.innerHTML += productCard;
    });
  }
    


/* ---------------------------- Hàm lọc và sắp xếp sản phẩm --------------------------- */

/* ---------------------------- Hàm sắp xếp sản phẩm --------------------------- */
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

// Hiển thị tất cả các sp khi trang được tải  (ko cần phải copy từng sp bên HTML, chạy vòng lặp và tải từng sp tương ứng với từng thông tin)
products.forEach(function (product) {
    var discountedPrice =
        product.price - product.price * (product.discount / 100);
    var productHtml = `
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
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
              <div class="row">
                      <div class="col-8" style="text-align: left;"> <button class="btn buy-now-btn" onclick="addToCart(${JSON.stringify(
                        product
                    ).replace(/"/g, "&quot;")})">Thêm vào giỏ hàng</button></div>
                      <div class="col-4 fs-2" style="color: #8295A1; text-align: end;"> <button class="love fs-2" onclick="addToFavorites(${JSON.stringify(
                        product
                    ).replace(
                        /"/g,
                        "&quot;"
                    )})"><i class='bx bx-heart' ></i></button>
                    </div>
             
            
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
/* -------------------------------------------------------------------------- */
/*                                  CODE MỚI                                  */
/* -------------------------------------------------------------------------- */
