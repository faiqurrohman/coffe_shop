const navbarNav = document.querySelector('.navbar-nav');


document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};


const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};


const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e){
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});


window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 600);
});


const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  reveals.forEach((el, i) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      setTimeout(() => {
        el.classList.add('active');
      }, i * 120); // muncul satu-satu
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  follower.style.left = e.clientX + 'px';
  follower.style.top = e.clientY + 'px';
});

const sound = document.getElementById('hover-sound');
document.querySelectorAll('.menu-card').forEach(card=>{
  card.addEventListener('mouseenter',()=>{
    sound.volume = 0.15;
    sound.currentTime = 0;
    sound.play();
  });
});

