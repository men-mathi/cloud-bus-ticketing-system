const seatContainer = document.getElementById("seatContainer");
const confirmBtn = document.getElementById("confirmBtn");

const bus = JSON.parse(localStorage.getItem("selectedBus"));

let selectedSeats = [];

/* CHECK IF BUS EXISTS */

if(!bus){
alert("Bus information missing");
window.location.href = "buses.html";
}

/* CREATE SEATS */

function generateSeats(){

for(let i=1;i<=40;i++){

const seat = document.createElement("div");

seat.classList.add("seat");

seat.innerText = i;

seat.addEventListener("click",function(){

if(selectedSeats.includes(i)){

selectedSeats = selectedSeats.filter(s => s !== i);
seat.classList.remove("selected");

}else{

selectedSeats.push(i);
seat.classList.add("selected");

}

});

seatContainer.appendChild(seat);

}

}

generateSeats();

/* CONFIRM BOOKING */

confirmBtn.addEventListener("click",function(){

if(selectedSeats.length === 0){
alert("Please select at least one seat");
return;
}
let user = null;

try {
user = JSON.parse(localStorage.getItem("user"));
} catch {
user = null;
}

const bookingData = {
userId: user ? user._id : null,
busId: bus._id,
seats: selectedSeats
};

localStorage.setItem("bookingData",JSON.stringify(bookingData));

window.location.href = "payment.html";

});