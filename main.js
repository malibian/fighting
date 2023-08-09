

'use strict'


const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

function toggleimg(){
    const img = document.getElementsByClassName("side_item");
    for (let i = 0; i < img.length; i++){
        if (img[i].style.display === 'none'){
            img[i].style.display = 'block';
        } else{
            img[i].style.display = 'none'
        }
    }
}

function togglebeno(){
    const img = document.getElementsByClassName("card");
    for (let i = 0; i < img.length; i++){
        if (img[i].style.display === 'none'){
            img[i].style.display = 'flex';
        } else{
            img[i].style.display = 'none'
        }
    }
}

function asiyah() {
    const img = [
    document.getElementById("말쿠트"),
    document.getElementById("에소드"),
    document.getElementById("호드"),
    document.getElementById("네짜흐")
    ];

    img.forEach(element => {
    if (element instanceof Element) {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.display === "none") {
        element.style.display = "flex";
        } else {
        element.style.display = "none";
        }
    }
    });
}

function Briah() {
    const img = [
    document.getElementById("티페리트"),
    document.getElementById("게부라"),
    document.getElementById("헤세드")
    ];

    img.forEach(element => {
    if (element instanceof Element) {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.display === "none") {
        element.style.display = "flex";
        } else {
        element.style.display = "none";
        }
    }
    });
}

function Atziluth() {
    const img = [
    document.getElementById("비나"),
    document.getElementById("호크마")
    ];

    img.forEach(element => {
    if (element instanceof Element) {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.display === "none") {
        element.style.display = "flex";
        } else {
        element.style.display = "none";
        }
    }
    });
}

const images = document.querySelectorAll('.card img');

images.forEach(img => {
    img.addEventListener('click' , function() {
        const classname = img.className;
        if (classname === '말쿠트') {
            window.location.href = '말쿠트.html';
        }else if(classname === '에소드') {
            window.location.href = '에소드.html'
        }else if(classname === '호드') {
            window.location.href = '호드.html'
        }else if(classname === '네짜흐') {
            window.location.href = '네짜흐.html'
        }else if(classname === '티페리트') {
            window.location.href = '티페리트.html'
        }else if(classname === '게부라') {
            window.location.href = '게부라.html'
        }else if(classname === '헤세드') {
            window.location.href = '헤세드.html'
        }else if(classname === '비나') {
            window.location.href = '비나.html'
        }else if(classname === '호크마') {
            window.location.href = '호크마.html'
        }
    });
});

// 말쿠트 html 의 자바스크립 코드

// 에소드 html 의 자바스크립 코드

// 호드 html 의 자바스크립 코드

// 네짜흐 html 의 자바스크립 코드