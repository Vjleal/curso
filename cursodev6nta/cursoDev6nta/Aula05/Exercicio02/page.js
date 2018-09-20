/**
 * 
 */

function fazerLogin(){
	var login=document.getElementById("login").value;
	var senha=document.getElementById("senha").value;

	if(login=="admin" && senha=="web123"){
		window.location = "index.html";
	}else{
		alert("Login ou senha errada...");
	}
	
}