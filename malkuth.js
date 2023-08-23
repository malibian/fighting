let currentPage = 0; // 현재 페이지를 추적하는 변수
console.log(currentPage)
// 전체 페이지 수를 가져옵니다.
const totalPages = document.querySelectorAll('.page').length;


// 페이지의 너비를 계산합니다.
const pageWidth = 100 / totalPages; // 각 페이지가 차지하는 너비를 계산

console.log(pageWidth)
console.log(totalPages)


// 왼쪽 버튼 이벤트 핸들러
document.querySelector('.btn1').addEventListener('click', function() {
    if (currentPage > 0) { // 현재 페이지가 0보다 크면 이전 페이지로 이동 가능
        currentPage--; // 현재 페이지를 하나 줄여서 이전 페이지로 이동
        updateBookPosition(); // 책(book) 위치 업데이트 함수 호출
    }
});

// 오른쪽 버튼 이벤트 핸들러
document.querySelector('.btn2').addEventListener('click', function() {
    if (currentPage < totalPages - 1) { // 현재 페이지가 전체 페이지 수보다 작으면 다음 페이지로 이동 가능
        currentPage++; // 현재 페이지를 하나 늘려서 다음 페이지로 이동
        updateBookPosition(); // 책(book) 위치 업데이트 함수 호출
    }
});

// 책(book) 위치 업데이트 함수
function updateBookPosition() {
    const book = document.querySelector('.book');
    // 책(book)을 현재 페이지의 위치로 이동합니다. 페이지 너비에 따라 계산된 이동 거리를 설정합니다.
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; // 수정된 부분
    const newPosition = -currentPage * (screenWidth * (pageWidth/16.66)); // 수정된 부분
    book.style.transform = `translateX(${newPosition}px)`; // 수정된 부분
    console.log(newPosition)
}

window.addEventListener('resize', updateBookPosition);
// 페이지 로드 시 초기 책(book) 위치 업데이트
updateBookPosition();


// book 클래스의 너비를 설정하는 CSS 변수를 추가합니다.
document.querySelector('.book').style.setProperty('--total-pages', totalPages);

// window.addEventListener('resize', function() {
//     handleScreenSizeChange();
// });
// function handleScreenSizeChange() {
//     const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //윈도우창밑 모든 경우의수 화면의 width(가로)크기 구하는법//
//     console.log('화면의 너비는 이거다!=>',screenWidth)
// }
// const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //윈도우창밑 모든 경우의수 화면의 height(세로)크기 구하는법//



document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.malkuth', {
        cursor:false,
        speed:50,
    })
    .go();
})


function startTypingAnimation(targetElement) {
    new TypeIt(targetElement, {
cursor: true,
speed: 90,
loop:true,
    })
    .go();
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
if (entry.isIntersecting) {
        startTypingAnimation(entry.target);
        observer.unobserve(entry.target);
}
    });
}, { threshold: 0.5 });

  // 감지할 요소들을 각각 선택해서 배열로 저장합니다.
const elementsToObserve = [
    document.querySelector('.span1'),
    document.querySelector('.span2'),
    document.querySelector('.span3'),
    document.querySelector('.span4'),
    document.querySelector('.span5'),
    document.querySelector('.span6'),
    document.querySelector('.span7'),
    document.querySelector('.span8'),
    document.querySelector('.span9'),
    document.querySelector('.span10'),
    document.querySelector('.span11'),
    document.querySelector('.span12'),
    document.querySelector('.span13'),
    document.querySelector('.span14'),

    // 다른 감지할 요소들을 여기에 추가합니다.
];

elementsToObserve.forEach(element => {
    if (element) { // 요소가 존재할 때만 감지 설정을 합니다.
observer.observe(element);
    }
});


    const observer2 = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 감지되면 텍스트를 보이게 하고 타이핑 애니메이션 시작
entry.target.style.visibility = "visible";
startTypingAnimation(entry.target);
observer.unobserve(entry.target);
        }
});
    }, { threshold: 0.5 });

    // 타이핑 애니메이션을 시작하는 함수
    function startTypingAnimation(targetElement) {
new TypeIt(targetElement, {
        cursor: true,
        speed: 50, // 루프 사용하지 않음
}).go();
    }

    // 감지할 요소들을 각각 선택해서 배열로 저장합니다.
    const elementsToObserve2 = document.querySelectorAll('.독백');

    // 감지할 요소들에 Intersection Observer 적용
    elementsToObserve2.forEach(element => {
observer2.observe(element);
    });



