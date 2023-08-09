ScrollOut({
    onShown: (Element) => {
        new TypeIt(Element.querySelector('.two'),{
            startDelay:500,
            speed:30,
            cursor:false,
        })
        .pause(2000)
.type("<br>도저히 견디지 못하겠어,")
.pause(500)
.type("관리자..")
.pause(500)
.type("관리자님 맞죠?")
.pause(500)
.type("그 안에 계시죠?<br>")
.pause(500)
.type("여기서 내보내주세요..!")
.pause(500)
.type("당신은 가능하잔아요,")
.pause(500)
.type("관리자시잖아요!")
.pause(300)
.type("우리랑은 다르잖아요!<br>")
.pause(300)
.type("무엇이든지 할 수 있잔아요!!")
.go();
    }
});

scroll({});