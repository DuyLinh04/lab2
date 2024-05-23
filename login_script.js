// script.js

document.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;
    let background = document.querySelector('.background');
    background.style.backgroundPositionY = -scrollTop * 0.5 + 'px';
});
