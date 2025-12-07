document.querySelector(".book-btn").addEventListener("click", function () {

});
function order(productName) {
let link = "https://wa.me/37128918?text=I want to order: " + encodeURIComponent(productName);
window.open(link, "_blank");
}
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Form submitted successfully!");
})
