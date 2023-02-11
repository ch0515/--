window.onload = function(){
    var num = document.querySelector(".num");
    var button = document.querySelector(".startBtn");

    button.addEventListener("click", function(){
        interval();
    });
    var timer;
    function interval(){
        clearInterval(timer); // setInterval이 중첩되지 않게 함

        var secNum = 0;
        timer = setInterval(function(){
            secNum ++;
            num.innerHTML = secNum;
        }, 10) // 1000으로 하면 1초에 한번씩 올라감
    }
}