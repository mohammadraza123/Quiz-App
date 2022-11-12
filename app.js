var userlogin = document.getElementById("userlogin");
var userPassword = document.getElementById("userpassword");
function gologin() {
    var emailValidation = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(userlogin.value);
    var passwordValidation = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(userPassword.value);
    localStorage.setItem("email", userlogin.value)
    localStorage.setItem("password", userPassword.value)

    if (emailValidation === false) {
        event.preventDefault();
        swal("ERROR", "Please Enter a Valid Email", "warning");
    }
    else if (passwordValidation === false) {
        event.preventDefault();
        swal("ERROR!", "Please Enter a Valid Password!", "warning");
    }
    else if (emailValidation === true && passwordValidation === true) {
        event.preventDefault();
        swal("Good job!", "", "success");
        var courses = document.getElementById("course")
        setTimeout(function () {
            courses.style.display = "block"
            var classlog = document.getElementById("log")
            classlog.style.display = "none"
        }, 3500)

    }
}



function subNames() {
    window.location = "web&app.html"
}