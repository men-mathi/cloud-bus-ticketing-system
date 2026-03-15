const form = document.getElementById("adminLoginForm");
const message = document.getElementById("loginMessage");

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

try{

const res = await fetch("http://localhost:5000/api/admin/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
username,
password
})

});

const data = await res.json();

if(res.ok){

localStorage.setItem("adminToken", data.token);

window.location.href="adminDashboard.html";

}else{

message.innerText=data.message;

}

}catch(err){

message.innerText="Server connection error";

}

});