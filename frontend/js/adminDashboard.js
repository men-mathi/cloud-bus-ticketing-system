console.log("Dashboard JS Loaded");

const token = localStorage.getItem("adminToken");

if(!token){
    window.location.href="adminLogin.html";
}

async function loadStats(){

try{

const res = await fetch("http://localhost:5000/api/admin/stats");
const data = await res.json();

console.log("API DATA:",data);

document.getElementById("totalUsers").innerText = data.totalUsers;
document.getElementById("totalBuses").innerText = data.totalBuses;
document.getElementById("totalBookings").innerText = data.totalBookings;
document.getElementById("totalRevenue").innerText = data.revenue || 0;

createChart(data);

}catch(err){

console.log(err);

}

}

function createChart(data){

const ctx = document.getElementById("dashboardChart");

new Chart(ctx,{

type:"bar",

data:{
labels:["Users","Buses","Bookings"],

datasets:[{
label:"System Overview",

data:[
data.totalUsers,
data.totalBuses,
data.totalBookings
],

backgroundColor:[
"#3498db",
"#2ecc71",
"#f1c40f"
]

}]
},

options:{
responsive:true,
plugins:{
legend:{
display:true
}
}
}

});

}

function logout(){

localStorage.removeItem("adminToken");
window.location.href="adminLogin.html";

}

loadStats();