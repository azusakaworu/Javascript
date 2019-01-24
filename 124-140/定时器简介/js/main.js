//js

/*定时器简介

window对象的方法：alert();
                 confirm();
                 prompt();

                 setTimeout();
                 clearTimeout();

                 setInterval(); 定时调用 两个参数 
                                            1.回调函数
                                            2.间隔时间 1000毫秒=1秒
                
                 clearInterval();取消终止计时器

-------------*/

var count = document.getElementById("count");
var num = 1;
var fun = function(){
  
   count.innerHTML= num++;
   if(num ==11){clearInterval(timer);//到10为止}

};
var timer = setInterval(fun,1000); 
console.log(timer);//定时器标识 1
////关闭计时器
