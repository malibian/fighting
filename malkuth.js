document.addEventListener("DOMContentLoaded", function() {
    // TypeIt 애니메이션 초기화
    new TypeIt('#title', {
        speed: 50,
        cursor: false,
    }).go();
});

// let isTypingInitialized = false; // 타이핑 애니메이션이 초기화되었는지 여부를 저장하는 변수

//         ScrollOut({
//             onShown: (element) => {
//                 // 타이핑 애니메이션이 초기화되지 않았다면 실행
//                 if (!isTypingInitialized) {
//                     isTypingInitialized = true;

//                     setTimeout(() => {
//                         new TypeIt(element.querySelector('.two'), {
//                             speed: 40,
//                             cursor: false,
//                         })
//                             .type("<br>도저히 견디지 못하겠어,")
//                             .pause(500)
//                             .type("관리자..")
//                             .pause(500)
//                             .type("관리자님 맞죠?")
//                             .pause(500)
//                             .type("그 안에 계시죠?<br>")
//                             .pause(500)
//                             .type("여기서 내보내주세요..!")
//                             .pause(500)
//                             .type("당신은 가능하잔아요,")
//                             .pause(500)
//                             .type("관리자시잖아요!<br>")
//                             .pause(300)
//                             .type("우리랑은 다르잖아요!")
//                             .pause(300)
//                             .type("무엇이든지 할 수 있잔아요!!")
//                             .go();
//                     }, 500); // 0.5초의 지연 효과
//                 }
//             }
//         });

ScrollOut({});