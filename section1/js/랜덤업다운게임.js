window.onload = function(){
    var input = document.getElementsByTagName("input")[0];
    var result = document.querySelector(".result");

    var button = document.querySelector(".startBtn");
    button.addEventListener("click", function(){
        resultFunc();
    });

    var resultArr = ["업 ▲", "다운 ▼", "정답!"];
    var randomNum = 5;

    function resultFunc(){
        var value = input.value;// value의 값을 가져옴
        if(value < randomNum){
            result.innerHTML = resultArr[0];
        }else if(value > randomNum){
            result.innerHTML = resultArr[1];
        }else{
            result.innerHTML = resultArr[2];
        }
    }
}