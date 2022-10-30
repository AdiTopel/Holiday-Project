const userStatusEl = document.getElementById('user-status');
const galleryEl = document.getElementById('gallery');
const favoritesEl = document.getElementById('favorites');
const homeEl = document.getElementById('home');
const welcomeEl = document.getElementById('welcome');
const welcomeName = document.getElementById('welcomeName');
const logOutLoggo = document.getElementById('logOutLoggo');
const welcomeContainerEl = document.querySelector('.welcomeContainer')

const userMobile = document.querySelector('.user');
const logInMobile = document.querySelector('#logInMobile');
const homeMobile = document.querySelector('#homeMobile');
const galleryMobile = document.querySelector('#galleryMobile');
const favoritesMobile = document.querySelector('#favoritesMobile');
const logOutLoggoMobile = document.querySelector('#logOutLoggoMobile');

const body = document.body;




async function authorization() {
  const token = localStorage.getItem("token");
  if (!token) return false;
  const res = await fetch("http://localhost:3003/user/authentication", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  const user = await res.json();
  return user;
};

async function initiatApp() {
    const user = await authorization();
    if (!user) {
        userStatusEl.innerHTML = "Sign In";
        galleryEl.className = 'loggedOut';
        favoritesEl.className = 'loggedOut';
        homeEl.className = 'loggedOut';
        logOutLoggo.className = 'loggedOut';
     
        logInMobile.innerHTML = 'sign in'
        homeMobile.className = 'loggedOut';
        galleryMobile.className = 'loggedOut';
        favoritesMobile.className = 'loggedOut';
        logOutLoggoMobile.className = 'loggedOut';
    } else {
        userStatusEl.innerHTML = `${user.username}`;
        userStatusEl.className = 'disabled-link';
        galleryEl.className = 'loggedIn';
        favoritesEl.className = 'loggedIn';
        homeEl.className = 'loggedIn';
        logOutLoggo.className = 'loggedIn';
        welcomeContainerEl.className = 'welcomeAuraLogged';
        welcomeName.innerHTML = `${user.username}`;
        body.className = 'bodyColor';

        userMobile.innerHTML =  `${user.username}`;
        logInMobile.className = 'loggedOut'
        logInMobile.innerHTML = `${user.username}`;
        homeMobile.className = 'loggedIn';
        galleryMobile.className = 'loggedIn';
        favoritesMobile.className = 'loggedIn';
        logOutLoggoMobile.className = 'loggedIn'; 
    }
  };


initiatApp();












