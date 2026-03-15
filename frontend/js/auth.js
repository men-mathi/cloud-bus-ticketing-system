function register(){

alert("Account created successfully")

window.location="login.html"

}

function login(){

if(data.success){

alert("Login Successful");

localStorage.setItem("user", JSON.stringify(data.user));

window.location.href = "buses.html";

}

}