$(document).ready(function() {
    // Khi di chuột vào ảnh sản phẩm
    $('.product-image, .buy-now-btn').mouseover(function() {
        $(this).closest('.product-card').find('.product-image').css('filter', 'brightness(70%)'); // Giảm độ sáng
        $(this).siblings('.card-body').find('.buy-now-btn').fadeIn(); // Hiện nút mua ngay
    });

    // Khi di chuột ra khỏi ảnh sản phẩm
    $('.product-image, .buy-now-btn').mouseleave(function() {
        $(this).closest('.product-card').find('.product-image').css('filter', 'brightness(100%)'); // Khôi phục độ sáng ban đầu
        $(this).siblings('.card-body').find('.buy-now-btn').fadeOut(); // Ẩn nút mua ngay
    });
     // Khi nhấp vào nút mua ngay, chuyển hướng đến trang chi tiết sản phẩm
     $('.buy-now-btn').click(function() {
        window.location.href = './product-detail.html';
    });

});


/* -------------------------------------------------------------------------- */
/*                                  CODE MỚI                                  */
/* -------------------------------------------------------------------------- */

    /* ------------------------- Tạo các biến cần thiết ------------------------- */
    var listProductElement = document.getElementById("listProduct");
    var favoritesListElement = document.getElementById("favoritesList");
    var searchInputElement = document.getElementById("searchInput");
    var sizeFilterElement = document.getElementById("sizeFilter");
    var priceFilterElement = document.getElementById("priceFilter");
    var sortOrderElement = document.getElementById("sortOrder");
    /* ------------------------- Tạo các biến cần thiết ------------------------- */
    /* ------------------------- Xóa sản phẩm yêu thích ------------------------- */
    function deleteFromFavorites(productName) {
      var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      var updatedFavorites = favorites.filter(item => item.name !== productName);
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
            favoritesListElement.innerHTML = "<p id='emptyFavoritesMessage'>Chưa có sản phẩm yêu thích nào.</p>";
        } else {
            // nếu có sp yêu thích thì hiển thị
            favorites.forEach(function (product) {
                var listItem = document.createElement("li");
                listItem.innerHTML = `
                    <img width="150px" src="${product.img}" alt="">
                    <span>${product.name}</span>
                    <span>${product.price.toLocaleString()}₫</span>
                    <button class="btn btn-danger delete-btn" onclick="deleteFromFavorites('${product.name}')">Loại bỏ</button>
                    `;
                    favoritesListElement.appendChild(listItem);
                });
        }
        // Cập nhật số lượng chỗ icon yêu thích trên header
        document.getElementById("favoritesCount").innerText = favorites.length;
    }
    /* ----------------------- Hiển thị sản phẩm yêu thích ---------------------- */
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartsCount").innerText = cart.length;
    /* ----------------------- Hiển thị sản phẩm yêu thích ---------------------- */
    displayFavorites();
    /* ----------------------- Hiển thị sản phẩm yêu thích ---------------------- */

/* -------------------------------------------------------------------------- */
/*                                  CODE MỚI                                  */
/* -------------------------------------------------------------------------- */