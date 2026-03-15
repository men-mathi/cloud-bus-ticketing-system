const token = localStorage.getItem("adminToken");

if(!token){
window.location.href="adminLogin.html";
}

let busTable = document.querySelector("#busTable tbody");

async function loadBuses(){

try{

const res = await fetch("http://localhost:5000/api/buses");

const buses = await res.json();

busTable.innerHTML="";

buses.forEach(bus=>{

let row = `
<tr>
<td>${bus.busName}</td>
<td>${bus.from}</td>
<td>${bus.to}</td>
<td>${bus.price}</td>
<td>
<button onclick="deleteBus('${bus._id}')">Delete</button>
</td>
</tr>
`;

busTable.innerHTML += row;

});

}catch(err){
console.log(err);
}

}

loadBuses();


document.getElementById("busForm").addEventListener("submit",async function(e){

e.preventDefault();

let bus = {
name:document.getElementById("busName").value,
from:document.getElementById("from").value,
to:document.getElementById("to").value,
price:Number(document.getElementById("price").value)
};

try{

await fetch("http://localhost:5000/api/buses",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(bus)

});

loadBuses();

}catch(err){

console.log(err);

}

});


async function deleteBus(id){

try{

await fetch(`http://localhost:5000/api/buses/${id}`,{

method:"DELETE"

});

loadBuses();

}catch(err){

console.log(err);

}

}
function logout(){
    localStorage.removeItem("adminToken");
    window.location.href = "adminLogin.html";
}