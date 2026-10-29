const loginform = document.getElementById("loginform");
const message = document.getElementById("message");
const loginbox = document.getElementById("login-box");

loginform.addEventListener("submit",function(event)
{
    event.preventDefault();
    const email=document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const hasEightCharacters = password.length ===8;

    if(!email || !password)
    {
        message.textContent = "please fill all fields";
        message.style.color = "red";
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = "Please enter a valid email";
        message.style.color = "red";
        return;
    }
    if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecial || !hasEightCharacters)
         {

        message.textContent = "Password must have exactly 8 characters,"+"including uppercase,lowercase,number and special character.";
        message.style.color ="red";
        return;
    }

    message.textContent="Login successfully!";
    message.style.color ="green";

    loginform.reset();


});

const signup = document.getElementById("signup");
const registrationbox = document.querySelector(".registration-box");
const registrationform = document.getElementById("registration-form");
const back=document.getElementById("back-to-login");
const rmessage = document.getElementById("r-message");

signup.addEventListener("click",function(event)
{
 loginbox.style.display="none";
 registrationbox.style.display = "block";
});

back.addEventListener("click", function(event)
{
    loginbox.style.display="block";
    registrationbox.style.display = "none";
});

registrationform.addEventListener("submit",function(event)
{
    event.preventDefault();
    const name =document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("reg_email").value.trim();
    const password = document.getElementById("reg-password").value.trim();
    const conpassword = document.getElementById("confirm_password").value.trim();

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const hasEightCharacters = password.length ===8;

    if(!name || !phone || !email || !password || !conpassword)
    {
        rmessage.textContent="please fill all fields";
        rmessage.style.color = "red";
        return;
    }

    if(!/^[0-9]{10}$/.test(phone))
    {
        rmessage.textContent = "please enter a valid 10-digit phone number";
        rmessage.style.color ="red";
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        rmessage.textContent = "Please enter a valid email";
        rmessage.style.color = "red";
        return;
    }
    if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecial || !hasEightCharacters)
         {

        rmessage.textContent = "Password must have exactly 8 characters,"+"including uppercase,lowercase,number and special character.";
        rmessage.style.color ="red";
        return;
    }

    if(password !== conpassword)
    {
        rmessage.textContent="password doesn't match";
        rmessage.style.color="red";
        return;
    }

    rmessage.textContent="Registration successfull!";
    rmessage.style.color="green";


});
