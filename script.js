let cart = [];
let userName = ""; // 預設未登入

document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.getElementById("greeting");
    const cartButton = document.getElementById("cart-button");
    const cartMenu = document.getElementById("cart-menu");
    const cartItems = document.getElementById("cart-items");
    const checkoutButton = document.getElementById("checkout-button");
    const searchBar = document.getElementById("search-bar");
    const paymentForm = document.getElementById("payment-form");
    const cartItems = document.getElementById("cart-items");

    // 更新問候語
    if (userName) {
        greeting.textContent = `親愛的 ${userName} 客戶您好`;
    }

    function updateCart() {
        cartItems.innerHTML = "";
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(cartItem);
        });
    }

    // 點擊購物車按鈕顯示購物車目錄
    cartButton.addEventListener("click", () => {
        cartMenu.classList.toggle("hidden");
        updateCart();
    });

    // 點擊結帳
    checkoutButton.addEventListener("click", () => {
        cartMenu.classList.add("hidden");
        checkoutModal.classList.remove("hidden");
    });

    // 確認支付
    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("支付成功！感謝您的購買！");
        checkoutModal.classList.add("hidden");
        cart = [];
    });
});