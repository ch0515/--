window.onload = function(){
        
    var button = document.querySelector(".startBtn");

    var h1 = document.getElementsByTagName("h1")[0];

    var handArr = ["가위", "바위", "보"];
    
    button.addEventListener("click", function(){
      var num = Math.round(Math.random() * (handArr.length-1)); 
      // var num = Math.round( Math.random() * 2);
      h1.innerHTML = handArr[num];
      // alert(handArr[num])
    })
  }