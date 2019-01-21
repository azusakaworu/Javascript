//js
/*
keyCode 

上 38
下 40
左 37
右 39

*/
//练习： 键盘移动div 根据方向键 
var box1 = document.getElementById('box1');
document.onkeydown = function(e){
      e = e || window.e;
      console.log(e.keyCode);

      // if(e.keyCode === 39){alert("向右");}
      // 	else if (e.keyCode === 38){alert("向上");}
      // else if (e.keyCode === 37){alert("向左");}
      // else if (e.keyCode === 40){alert("向下");}


      //按了Ctrl 以后速度加快
      var speed = 20;
      if(e.ctrlKey ){
      	   speed = 40;
      }
         
      switch(e.keyCode){
           case 37:
           box1.style.left = box1.offsetLeft -speed +"px";//向左
           break;


             case 38:
           box1.style.top = box1.offsetTop -speed +"px";
           break;


             case 39:
           box1.style.left = box1.offsetLeft+speed +"px";//向右
           break;

             case 40:
           box1.style.top = box1.offsetTop +speed +"px";
           break;


      }
};