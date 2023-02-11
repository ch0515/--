window.onload = function(){
    var input = document.getElementsByTagName("input")[0];
    var result = document.querySelector(".result");

    var button = document.querySelector(".startBtn");
    button.addEventListener("click", function(){
        resultFunc();
    });

    var resultArr = ["업 ▲", "다운 ▼", "정답!"];
    var randomNum = Math.round(Math.random()*10);

    function resultFunc(){
        var value = input.value;// value의 값을 가져옴
        if(value < randomNum){
            result.innerHTML = resultArr[0];
        }else if(value > randomNum){
            result.innerHTML = resultArr[1];
        }else{
            result.innerHTML = resultArr[2];
            alert("정답입니다.");
            //2초 뒤 리셋
            setTimeout(function(){
                resetFunc();
            }, 1000)
        }
    }
    function resetFunc(){
        input.value = 1;
        result.innerHTML = "한 판더! (1부터 10사이 정수)";
        randomNum = Math.round(Math.random()*10);
    }
}