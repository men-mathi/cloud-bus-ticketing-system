const token = localStorage.getItem("adminToken");

if(!token){

window.location.href="adminLogin.html";

}
const container = document.getElementById("messageContainer");

async function loadMessages() {

container.innerHTML = "<p>Loading messages...</p>";

try {

const res = await fetch("http://localhost:5000/api/contact/messages");

if(!res.ok){
throw new Error("Server error");
}

const messages = await res.json();

container.innerHTML = "";

if(messages.length === 0){

container.innerHTML = "<p>No passenger messages yet.</p>";
return;

}

messages.forEach(msg => {

const card = document.createElement("div");

card.className = "messageCard";

card.innerHTML = `

<h3>${msg.name}</h3>

<p><strong>Email:</strong> ${msg.email}</p>

<p><strong>Message:</strong> ${msg.message}</p>

<p class="msgDate">${new Date(msg.date).toLocaleString()}</p>

`;

container.appendChild(card);

});

}catch(error){

console.error(error);

container.innerHTML = "<p>Failed to load messages. Server might be offline.</p>";

}

}

loadMessages();
function logout(){
    localStorage.removeItem("adminToken");
    window.location.href = "adminLogin.html";
}