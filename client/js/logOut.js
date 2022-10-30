const logOutLoggoEl = document.getElementById('logOutLoggo');
const logOutLoggoMobileEl = document.getElementById('logOutLoggoMobile')


logOutLoggoEl.addEventListener('click', (e) => {
    console.log('log out');
    localStorage.removeItem('token');
    window.location.href = '/client/home.html';
});



logOutLoggoMobileEl.addEventListener('click', (e) => {
    localStorage.removeItem('token');
    window.location.href = '/client/home.html';
})