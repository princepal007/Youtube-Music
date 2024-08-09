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

const signUp_form = document.querySelector(".signUp_form");

signUp_form.addEventListener("submit", (e) => {
    e.preventDefault();
    user_eror_msg();
});


let signUp_first_name = document.querySelector("#signUp_first_name");
let signUp_last_name = document.querySelector("#signUp_last_name");
let signUp_email = document.querySelector("#signUp_email");
let signUp_password = document.querySelector("#signUp_password");
let signUp_confirm_password = document.querySelector("#signUp_confirm_password");
let error_msg = document.querySelector(".error_msg");
const profile_photo_signUp = document.querySelector(".profile_photo_signUp");

const user_eror_msg = () => {
    if( signUp_first_name.value === "" || signUp_last_name.value === "" || signUp_email.value === "" || signUp_password.value ===  "" || signUp_confirm_password.value === "" ) {
        error_msg.innerText = "Please fill in all fields";
        return false;
    } else if ( signUp_password.value != signUp_confirm_password.value ) { 
        error_msg.innerText = "Passwords do not match";
        return false;
    } else if ( find_user_info() ) {
        return false;
    } else {
        add_user_signUp_data();
        window.location.href = "signIn.html";
        return true;
    }  
};

let user_signUp_data = new Array();

let find_user_info = () => {
    let user_signUp_data = JSON.parse(localStorage.getItem('myUserData')) ? JSON.parse(localStorage.getItem('myUserData')) : []
    if (user_signUp_data.some((v) => {
        return v.email === signUp_email.value
    })) {
        error_msg.innerText = "This Email already has been taken";
        return false;
    }
};

const add_user_signUp_data = () => {
    let user_data = {
        first_name: signUp_first_name.value,
        last_name: signUp_last_name.value,
        email: signUp_email.value,
        password: signUp_password.value,
        confirm_password: signUp_confirm_password.value
    };
    user_signUp_data.push(user_data);
    signUp_form.reset();
    alert("Page Signed Up Successfully");
    localStorage.setItem("myUserData", JSON.stringify(user_signUp_data));
};


