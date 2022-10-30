const mobileLinks = document.querySelector('.mobileLinks');
const navbar = document.querySelector('.navbar');

function openMenu(){
    navbar.style.display = 'none';
    if (mobileLinks.style.display === 'flex'){
        mobileLinks.style.display = 'none';
    } else {
        mobileLinks.style.display = 'flex';
    }
};

