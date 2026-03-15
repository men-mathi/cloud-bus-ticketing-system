const token = localStorage.getItem("adminToken");

if(!token){
window.location.href="adminLogin.html";
}

let table = document.querySelector("#bookingTable tbody");

async function loadBookings(){

try{

const res = await fetch("http://localhost:5000/api/bookings");

const bookings = await res.json();

table.innerHTML="";

bookings.forEach(b=>{

let row = `
<tr>
<td>${b.userId ? b.userId.name : "Guest"}</td>
<td>${b.busId ? b.busId.busName : "Unknown Bus"}</td>
<td>${b.seats.join(", ")}</td>
<td>${b.price}</td>
</tr>
`;

table.innerHTML += row;

});

}catch(err){

console.log("Booking load error",err);

}

}

loadBookings();

function logout(){
localStorage.removeItem("adminToken");
window.location.href="adminLogin.html";
}