// Cart Count
let cartCount = 0;

function addCart() {
    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert("Product added to cart!");
}

// Search Products
function searchProduct() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        let productName = cards[i]
        .getElementsByClassName("product-name")[0]
        .textContent
        .toLowerCase();

        if (productName.includes(input)) {

            cards[i].style.display = "block";

        } else {

            cards[i].style.display = "none";

        }

    }

}

// Shop Now Button
let shopButton = document.querySelector(".hero button");

shopButton.addEventListener("click", function () {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

});