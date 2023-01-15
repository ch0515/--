window.onload = function(){
    var resetBtn = document.querySelector(".resetBtn");
    var startBtn = document.querySelector(".startBtn");

    var h1 = document.getElementsByTagName("h1")[0];
    var arrow = document.querySelector(".arrow");

    var rotateNum = 0;

    resetBtn.addEventListener("click", function(){
        rotateNum = 0;
        h1.innerHTML = rotateNum + "deg";
        arrow.style.transform = "rotate("+rotateNum+"deg)";
    })
    startBtn.addEventListener("click", function(){
        rotateNum = Math.round(Math.random()*360);
        h1.innerHTML = rotateNum + "deg";
        arrow.style.transform = "rotate("+rotateNum + "deg)";
    })
}