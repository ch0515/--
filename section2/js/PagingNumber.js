window.onload = function(){
    var prevBtn = document.querySelector(".prevBtn");
    var nextBtn = document.querySelector(".nextBtn");
    var h1 = document.getElementsByTagName("h1")[0];

    var pageNum = 0;
    var totalNum = 6;

    prevBtn.addEventListener("click", function(){
      if(pageNum > 0){
        pageNum --;
      }else {
        pageNum = totalNum-1;
      }
      h1.innerHTML = pageNum + " 페이지 입니다."
    })

    nextBtn.addEventListener("click", function(){
      if(pageNum < totalNum-1){
        pageNum ++;
      }else{
        pageNum = 0;
      }
      h1.innerHTML = pageNum + " 페이지 입니다."
    })
  }