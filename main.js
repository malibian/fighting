

'use strict'


const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

const slides = document.querySelector('.slides');
const slideimg = document.querySelectorAll('.slides li');
let currentldx = 0;
const slideCount = slideimg.length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideWidth = 600;
const slideMargin = 100;

slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
    slides.style.left = -num * 600 + 'px';
    currentldx = num;
}

prev.addEventListener('click',function(){
    if (currentldx !==0) moveSlide(currentldx -1);
});

next.addEventListener('click',function(){
    if (currentldx !== slideCount -1){
        moveSlide(currentldx + 1);
    }
});




