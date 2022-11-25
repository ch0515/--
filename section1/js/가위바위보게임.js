window.onload = function(){
    var button = document.querySelector(".startBtn");
    // .startBtn 클래스가 여러개 있다면 var button = document.querySelectorAll(".startBtn")[0]; 이 방법도 가능

    var h1 = document.getElementsByTagName("h1")[0];
    var handArr = ["가위", "바위", "보"];

    button.addEventListener("click", function(){ //버튼 클릭 시 이벤트가 발생하게
        var num = Math.round(Math.random() * (handArr.length-1));
        //math.round함수는 반올림 함수 handArr.length == 배열 갯수 세서하기
        h1.innerHTML = handArr[num];
    })
}