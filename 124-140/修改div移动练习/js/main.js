//js

/*
速度有问题 方向没问题
修改速度卡顿问题：



*/

//练习： 键盘移动div 根据方向键 
var box1 = document.getElementById('box1');
   var speed = 10;
   var dir = 0;
//开启一个定时器 只控制移动
var fun = function(){
   switch(dir){
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
setInterval(fun,10);

document.onkeydown = function(e){
      e = e || window.e;
      console.log(e.keyCode);

      // if(e.keyCode === 39){alert("向右");}
      // 	else if (e.keyCode === 38){alert("向上");}
      // else if (e.keyCode === 37){alert("向左");}
      // else if (e.keyCode === 40){alert("向下");}


      //按了Ctrl 以后速度加快
   
      if(e.ctrlKey ){
      	   speed = 40;
      }else{speed=10;}//松开以后恢复原速
         
     dir = e.keyCode;
};

document.onkeyup = function(){
  //松手以后停止
  dir=0;
}