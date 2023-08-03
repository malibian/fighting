

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







