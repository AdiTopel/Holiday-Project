const userStatus = document.querySelector('#user-status');
const loginForm = document.querySelector('[data-login-form]');
const errorMessageEl = document.querySelector('#errorMessage')
const usernameEl = document.getElementById('username');
const passwordEl = document.getElementById('password');
const sighnInEl = document.querySelector('.login');
const eyePasswordEl = document.querySelector('#eyePassword');





loginForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const reqBody = {
        username: usernameEl.value,
        password: passwordEl.value
    };
    
    const res = await fetch('http://localhost:3003/user/login', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(reqBody)
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

});

eyePasswordEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (passwordEl.type === 'password'){
        passwordEl.type = 'text';
    }else{
        passwordEl.type = 'password';
    }
});


