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
        window.scrollTo({
            top: section[pageNum].offsetTop,
            behavior: 'smooth', //애니메이션 추가
        })
    })

    nextBtn.addEventListener("click", function(){
        if(pageNum < totalNum-1){
          pageNum ++;
        }else{
          pageNum = 0;
        }
        pageChangeFunc();
        window.scrollTo({
            top: section[pageNum].offsetTop,
            behavior: 'smooth', //애니메이션 추가
        })
      })

      function pageChangeFunc(){
        h1.innerHTML = (pageNum+1) + " 페이지 입니다."
        document.getElementsByTagName("body")[0].style.background = bgColorArr[pageNum];
      }
      pageChangeFunc();

      window.addEventListener("scroll", function(event){
        var scroll = this.scrollY;
        // var scroll2 = this.document.documentElement.scrollTop;
        // console.log(scroll, scroll2);

        //첫번째 방법
        //1차원 적이지만 페이지 수가 2개 정도면 괜찮다
        // if(scroll < section[1].offsetTop){
        //     pageNum = 0;
        // }
        // if(scroll < section[1].offsetTop){
        //     pageNum = 1;
        // }
        // if(scroll < section[1].offsetTop){
        //     pageNum = 2;
        // }
        // if(scroll < section[1].offsetTop){
        //     pageNum = 3;
        // }

        //두번째 방법
        for(var i=0; i<totalNum; i++){
            if(scroll > section[i].offsetTop - window.outerHeight/1.5 && scroll < section[i].offsetTop - window.outerHeight/1.5 + section[i].offsetHeight){
                pageNum = i;
                break;
            }
            // if(scroll > section[i].offsetTop && scroll < section[i].offsetTop + section[i].offsetHeight){
            //     // 페이지가 시작하는 점선 부터 해당 페이지 끝까지의 사이에 있으면
            //     pageNum = i;
            //     break;
            // }
        }
        pageChangeFunc();
      });
}