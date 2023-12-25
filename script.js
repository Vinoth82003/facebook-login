console.log("script.js connected");

const signupDiv = document.querySelector(".signup-content");
const signup_Btn = document.querySelector(".btn-create-account");
const signup_close_Btn = document.querySelector(".frame-close");

signup_Btn.addEventListener("click", ()=>{
    signupDiv.style.overflow = 'hidden';
    signupDiv.classList.add("active");
    signupDiv.classList.remove("done");
    setTimeout(() => {
        signupDiv.style.overflow = 'visible';
    }, 1000);
});

signup_close_Btn.addEventListener("click", ()=>{
    signupDiv.style.overflow = 'hidden';
    signupDiv.classList.remove("active");
    signupDiv.classList.add("done");
    setTimeout(() => {
        signupDiv.classList.remove("done");
        signupDiv.style.overflow = 'visible';
    }, 700);
});

let all_inputs = document.querySelectorAll(".signup-form .validate");
console.log(all_inputs);

all_inputs.forEach(input => {
    input.addEventListener("blur", ()=>{
        if (input.value == "" || input.value.length <= 0) {
            input.parentElement.classList.add("error");
        }else{
            input.parentElement.classList.remove("error");
        }
    })
});