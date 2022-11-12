var uemail = document.getElementById("uemail");
var upassword = document.getElementById("upassword"); 
function signup() {
  var firstNameregex = /^\s*$/.test(fname.value);
    var lastNameregex = /^\s*$/.test(lname.value);  
  var emailValidation =  /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(uemail.value);
    var passwordValidation = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(upassword.value);
    
    localStorage.setItem("text",fname.value)
    localStorage.setItem("text",lname.value)
   
    localStorage.setItem("email",uemail.value)
    localStorage.setItem("password",upassword.value)
   
   
   
    if(firstNameregex === true){
      event.preventDefault();
      swal("ERROR", "Please Enter a First Name", "warning");       
    } 
    else if (lastNameregex === true) {
      event.preventDefault();
      swal("ERROR", "Please Enter a Last Name", "warning");        
      
    }

      else if (emailValidation === false) {
        event.preventDefault();
        swal("ERROR", "Please Enter a Valid Email", "warning");        
        
      }
    else if (passwordValidation === false){
        event.preventDefault();
        swal("ERROR!", "Please Enter a Valid Password!", "warning");        

    }
    
    else if (emailValidation === true && passwordValidation === true){
      event.preventDefault();
        swal("Good job!", "", "success");
        setTimeout(function(){
          window.location = "login.html"
        },3000)        
        
    
    
    }
    
function subNames(){
    window.location = "web&app.html"
}
    }