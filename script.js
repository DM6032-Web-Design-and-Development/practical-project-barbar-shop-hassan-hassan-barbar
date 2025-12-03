document.querySelector(".book-btn").addEventListener("click", function () {
  alert("Booking system coming soon!");
});
function order(productName) {
let link = "https://wa.me/37128918?text=I want to order: " + encodeURIComponent(productName);
window.open(link, "_blank");
}
