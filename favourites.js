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
                <div class="col-md-3 col-sm-4">
                    <img width="150em" src="${product.img}" alt=""></div>
                    <div class="col-md-5 col-sm-4">
                    <a href="./${product.name
                    }.html">
                        <span style="font-weight:bold; font-size:1em;">${product.name}</span></a> </div>
                        <div class="col-md-3 col-sm-3">   
                    <span style="font-weight:bold">${product.price.toLocaleString()}₫</span></div>
                    <div class="col-md-3 col-sm-2">
                    <button class="btn btn-danger delete-btn" onclick="deleteFromFavorites('${product.name}')">Loại bỏ</button></div>
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
