// Get form
const paymentForm = document.getElementById("paymentForm");

// Get booking data
let bookingData = JSON.parse(localStorage.getItem("bookingData"));

if (!bookingData) {
alert("Booking data missing");
window.location.href = "home.html";
}

paymentForm.addEventListener("submit", function(e){

e.preventDefault();

completePayment();

});

function completePayment(){

fetch("http://localhost:5000/api/bookings/book", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify(bookingData)

})
.then(response => response.json())
.then(data => {

alert("Payment Successful! Ticket Booked");

// store backend response
localStorage.setItem("ticketData", JSON.stringify(data));

// ❌ DO NOT delete bookingData

window.location.href = "ticket.html";

})
.catch(error => {

console.error(error);

alert("Payment Failed. Please try again.");

});

}