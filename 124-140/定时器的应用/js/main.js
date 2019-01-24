//js

/*定时器的应用

-------*/
var box1=document.getElementById("box1");
var btn01 = document.getElementById("btn01");

function getStyle(obj,name){

	if(window.getComputedStyle){
		return getComputedStyle(obj, null)[name];
	}//else{return obj.currentStyle[name];}//ie8 默认值auto 加上left=0px;
	
}

var timer;//全局声明
btn01.onclick = function(){
	// var left = box1.offsetLeft;
	// var top = box1.offsetTop;

	// box1.style.left = left+10+"px";
	// box1.style.top = top+10+"px";

	clearInterval(timer);//没赋值也不报错
    timer = setInterval(function(){

    	var oldValue = parseInt(getStyle(box1,"left"));//parseInt 取出字符串里的合法数字 方便计算
        //alert(oldValue);
           var newValue = oldValue +1;
           if(newValue>800){
           	newValue=800;
           }
           box1.style.left = newValue+ "px";
        
          if(newValue >= 800){
          	clearInterval(timer);
          }
           
  
   },30);


};