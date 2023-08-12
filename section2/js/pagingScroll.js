window.onload = function(){
    var prevBtn = document.querySelector(".prevBtn");
    var nextBtn = document.querySelector(".nextBtn");
    var h1 = document.getElementsByTagName("h1")[0];
    var bgColorArr = ["#708C8C", "#F2CAA7", "#A68A72", "#D9886A"];
    var section = document.getElementsByTagName("section");
    //alert(section.length);

    var pageNum = 0;
    var totalNum = section.length;

    prevBtn.addEventListener("click", function(){
        if(pageNum > 0){
            pageNum --;
        }else{
            pageNum = totalNum - 1;
        }
        pageChangeFunc();
    })

    nextBtn.addEventListener("click", function(){
        if(pageNum < totalNum-1){
          pageNum ++;
        }else{
          pageNum = 0;
        }
        pageChangeFunc();
      })

      function pageChangeFunc(){
        h1.innerHTML = pageNum + " 페이지 입니다."
        document.getElementsByTagName("body")[0].style.background = bgColorArr[pageNum];

        //1
        //window.scrollTo(0, section[pageNum].offsetTop); //바로 보내는 방법
        //2
        window.scrollTo({
            top: section[pageNum].offsetTop,
            behavior: 'smooth', //애니메이션 추가
        })
      }
      pageChangeFunc();
}