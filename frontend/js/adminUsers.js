const token = localStorage.getItem("adminToken");

if(!token){
window.location.href="adminLogin.html";
}

let table = document.querySelector("#usersTable tbody");

async function loadUsers(){

try{

const res = await fetch("http://localhost:5000/api/admin/users");

if(!res.ok){
throw new Error("Failed to fetch users");
}

const users = await res.json();

table.innerHTML="";

if(users.length===0){

table.innerHTML="<tr><td colspan='2'>No users found</td></tr>";
return;

}

users.forEach(u => {

let row = `
<tr>
<td>${u.name}</td>
<td>${u.email}</td>
</tr>
`;

table.innerHTML += row;

});

}catch(err){

console.error("Users load error:",err);

table.innerHTML="<tr><td colspan='2'>Failed to load users</td></tr>";

}

}

loadUsers();
function logout(){
    localStorage.removeItem("adminToken");
    window.location.href = "adminLogin.html";
}