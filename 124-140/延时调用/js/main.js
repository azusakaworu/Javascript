//js  
/*
延时调用：
 
      setTimeout();一个函数不马上执行，隔一段时间后执行
   只执行一次 
clearTimeout();


定时调用和延时调用可以互相代替： 用哪种都行 
用的多的： 定时调用
*/

//定时调用：
var num = 1;
var timer2 = setInterval(function(){
	console.log(num++);
},3000);
clearInterval(timer2);

//延时调用
var num = 1;
var timer = setTimeout(function(){
	console.log(num++);
},3000);//3秒后执行一次 就一次

clearTimeout(timer);