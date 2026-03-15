// get ticket data
const ticketData = JSON.parse(localStorage.getItem("ticketData"));

// get seat data
const bookingData = JSON.parse(localStorage.getItem("bookingData"));

if (!bookingData) {
alert("Ticket data not found");
window.location.href = "home.html";
}

// generate ticket id
const ticketId = "TC-" + Math.floor(Math.random() * 100000);

// get seats
const seats = bookingData.seats;

// update UI
document.getElementById("ticketId").innerText = ticketId;
document.getElementById("seatNumber").innerText = seats.join(", ");

// generate QR
const qr = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + ticketId;

document.getElementById("qrCode").src = qr;