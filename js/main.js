


function validate(){
var user = document.getElementById("user").value ;
var email = document.getElementById("email").value;
var password = document.getElementById("pass").value;
var confirm = document.getElementById("confirm").value ;
var result = document.getElementById("result");

result.setAttribute("class","re") ;
 
if (user=="" && email=="" && password=="" && confirm=="") {
    result.innerHTML= "Enter your data please" ;
    return false ;
}
 else if (user.length<5 || user.length>10) {
    result.innerHTML = "Enter from 5 to 10 character in username" ;
    return false ;
}


else if( email.indexOf ("@",3)==-1 || email.indexOf(".com")==-1){
result.innerHTML = "Enter validate email";
return false ;
}
else if(password.length<10){
    result.innerHTML= "Enter 10 character in pasword or more"
    return false ;
}
else if(password != confirm){
    result.innerHTML= "please confirm the password" ;
    return false ;
}
}