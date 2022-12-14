let signup_form=document.querySelector("#signupform");
let first_name=document.querySelector("#first_name");
let last_name=document.querySelector("#last_name");
let emails=document.querySelector("#email");
let password=document.querySelector("#password");

let signin_form=document.querySelector("#signin_form");
let signin_email=document.querySelector("#signin_email");
let signin_pwd=document.querySelector("#signin_pwd");

let login_failed_div=document.getElementById("login_failed_div");
let formData=JSON.parse(localStorage.getItem("signup_data"))||[];
signup_form.addEventListener("submit",function(event){
    event.preventDefault();
    let fname=first_name.value,
        lname=last_name.value,
        email=emails.value,
        pwd=password.value;

        let exist=formData.length &&
        JSON.parse(localStorage.getItem("signup_data")).some(data => 
        data.fname.toLowerCase()==fname.toLowerCase() &&
        data.lname.toLowerCase()==lname.toLowerCase()
        );

        if(!exist){
            localStorage.setItem("username",fname);
        formData.push({fname,lname,email,pwd});
        localStorage.setItem("signup_data",JSON.stringify(formData))
        alert("Account Created.");
        signup_form.reset();
        first_name.focus();
        // location.href="home.html"
        }
        else{
            alert("Account is already present "); 
            signup_form.reset();
            first_name.focus();
        }
})

signin_form.addEventListener("submit",function(event){
    event.preventDefault();
    let email=signin_email.value,
        pwd=signin_pwd.value;

        let exist=formData.length && 
        formData.some(data =>
        data.email.toLowerCase()==email.toLowerCase() &&
        data.pwd.toLowerCase()==pwd.toLowerCase()
        );

        if(!exist){
            login_failed_div.innerHTML=`
            <div id="login_failed">
            <p id="failed">Invalid login or password</p>
            </div>
            `;
            // signin_form.reset();
            // signin_email.focus();
        }
        else{
            alert("login successfull");
            login_failed_div.innerHTML=null;
            signin_form.reset();
            signin_email.focus();
        //    location.href="user.html";
        }
})