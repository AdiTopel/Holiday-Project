const registrationForm = document.querySelector('[data-registration-form]');
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const verifyPasswordEl = document.querySelector('#verifyPassword');
const firstNameEl = document.querySelector('#firstName');
const lastNameEl = document.querySelector('#lastName');
const submit = document.querySelector('#submit');
const errorMessageEl = document.querySelector('#errorMessage');
const eyePasswordEl = document.querySelector('#eyePassword');
const eyeVerifyPasswordEl = document.querySelector('#eyeVerifyPassword');



registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const reqBody = {
        username: usernameEl.value,
        email:emailEl.value,
        password: passwordEl.value,
        verifyPassword: verifyPasswordEl.value,
        firstName: firstNameEl.value,
        lastName: lastNameEl.value,
    }
    const res = await fetch ('http://localhost:3003/user/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    });
    const data = await res.json();
    

    const {error, message, userToken} = data
    if (error){
        errorMessageEl.innerHTML = error;
    }else if (message){
        errorMessageEl.innerHTML = message;
    }else{
        localStorage.setItem('token', userToken);
        window.location.href = '/client/home.html';
    }
})


eyePasswordEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (passwordEl.type === 'password'){
        passwordEl.type = 'text';
    }else{
        passwordEl.type = 'password';
    }
});

eyeVerifyPasswordEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (verifyPasswordEl.type === 'password'){
        verifyPasswordEl.type = 'text';
    }else{
        verifyPasswordEl.type = 'password';
    }
});