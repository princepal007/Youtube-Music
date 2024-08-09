let eye_icon = document.querySelector(".eye_icon");
eye_icon.addEventListener("click", () => {
    let password = document.querySelector(".password");
    if (password.type === "password") {
        password.type = "text";
        eye_icon.classList.remove("fa-eye-slash");
        eye_icon.classList.add("fa-eye");
        return
    } else {
        password.type = "password";
        eye_icon.classList.remove("fa-eye");
        eye_icon.classList.add("fa-eye-slash");
    }
});


const signIn_form = document.querySelector(".signIn_form");
let signUp_email = document.querySelector("#signUp_email");
let signUp_password = document.querySelector("#signUp_password");
let signUp_confirm_password = document.querySelector("#signUp_confirm_password");
let error_msg = document.querySelector(".error_msg");
let signIn_email = document.querySelector("#signIn_email");
let signIn_password = document.querySelector("#signIn_password");

signIn_form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    check_user_info();
});



const check_user_info = () => {
    let myUserData = new Array();
    myUserData = JSON.parse(localStorage.getItem("myUserData")) ? JSON.parse(localStorage.getItem("myUserData")) : [];
    
    if (signIn_email.value === "" || signIn_password.value === "") {
        error_msg.innerText = "Please fill in all fields";
        return false;
    } else if (myUserData.some((item) => {
        return item.email !== signIn_email.value
    })) {
        error_msg.innerText = "Email don't exist";
        return false;
    } else if (myUserData.some((item) => {
        return item.email === signIn_email.value && item.password !== signIn_password.value
    })) {
        error_msg.innerText = "Password is incorrect";
        return false;
    } else if (myUserData.some((item) => {
        return item.email === signIn_email.value && item.password === signIn_password.value
    })) {
        alert("Successfully Logged In");
        window.location.href = "index.html";
        return true;
    }    
    

}; 


       
