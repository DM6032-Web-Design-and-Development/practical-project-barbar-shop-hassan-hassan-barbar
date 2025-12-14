
function order(productName) {
  const link =
    "https://wa.me/371289187?text=" +
    encodeURIComponent("I want to order: " + productName);
  window.open(link, "_blank");
}


const form = document.getElementById("bookingForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function () {
  message.style.display = "block";
  message.textContent = "✅ تم استلام طلبك بنجاح!";
});

