//js

/*事件对象

event = event||window.event;  --> 解决兼容性万能代码 

浏览器知道。
定义一个形参 --> 方便使用

当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为 实参 传递进响应函数。

在事件对象中封装了一切关于当前事件的信息，比如 鼠标的坐标，键盘哪个按键被按下，鼠标滚轮滚动的方向

---------------*/


//当鼠标在areaDiv中移动时，在showMsg中显示鼠标坐标

var showMsg = document.getElementById("showMsg");
var areaDiv = document.getElementById("areaDiv");

areaDiv.onmousemove = function(event){
  //火狐不兼容 window.event
    //IE8及以下 要window.event
	event = event||window.event; 
     // alert(event);//event 事件对象
    var x = event.clientX;
    var y = event.clientY;

  

    //console.log("x="+x, "y="+y);
    showMsg.innerHTML =("x="+x +", y="+y);
};