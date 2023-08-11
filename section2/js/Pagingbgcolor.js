window.onload = function(){
    var prevBtn = document.querySelector(".prevBtn");
    var nextBtn = document.querySelector(".nextBtn");
    var h1 = document.getElementsByTagName("h1")[0];
    var bgColorArr = ["#708C8C", "#F2CAA7", "#A68A72", "#D9886A"];

    var totalNum = bgColorArr.length;
    var pageNum = Math.round(Math.random()*(totalNum-1)); //새로고침 시에 랜덤으로 출력

    prevBtn.addEventListener("click", function(){
        if(pageNum > 0){
            pageNum --;
        }else{
            pageNum = totalNum - 1;
        }
        bgColorChange();
    })

    nextBtn.addEventListener("click", function(){
        if(pageNum < totalNum-1){
          pageNum ++;
        }else{
          pageNum = 0;
        }
        bgColorChange();
      })

      function bgColorChange(){
        h1.innerHTML = pageNum + " 페이지 입니다."
        document.getElementsByTagName("body")[0].style.background = bgColorArr[pageNum];
      }

      bgColorChange();
}