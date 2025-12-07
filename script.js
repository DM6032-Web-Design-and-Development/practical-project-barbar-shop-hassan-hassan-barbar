
function order(productName) {
  const link =
    "https://wa.me/371289187?text=" +
    encodeURIComponent("I want to order: " + productName);
  window.open(link, "_blank");
}

const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Booking form submitted", new FormData(bookingForm));
  });
}

