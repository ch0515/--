window.onload = function(){
    var input = document.getElementsByTagName("input")[0];
    var sec = document.querySelector(".sec");

    var button = document.querySelector(".startBtn");

    button.addEventListener("click", function(){
        interval();
    });
    var timer;
    function interval(){
        clearInterval(timer); // setInterval이 중첩되지 않게 함

        value = input.value * 10000;
        secValue = value / 365 / 24 / 60 / 60; //초 계산

        var secNum = 0;
        timer = setInterval(function(){
            secNum ++;
            sec.innerHTML = "당신은 "+secNum+"초에" + (secValue * secNum).toFixed(1) + "원 벌고 있습니다.";
        }, 1000) // 1000으로 하면 1초에 한번씩 올라감
    }
}