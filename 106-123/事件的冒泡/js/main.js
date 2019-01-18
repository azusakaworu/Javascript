//js
/*事件的冒泡

Bubble: 事件向上传到，
当后代元素上的事件被触发时，其祖先元素的 相同事件 也会被触发

span --> div --> body

事件对象（event）.cancelBubble = true;
-----------------*/

var s00 = document.getElementById("s00");
var box1 = document.getElementById("box1");

s00.onclick = function(e){
	alert("我是span的单击响应函数");
	e= e||window.e;//事件对象兼容性
	e.cancelBubble = true;//停止冒泡 
};

box1.onclick = function(e){
	e= e||window.e;//事件对象兼容性
	e.cancelBubble = true;//停止冒泡 
	alert("我是div box1的单击响应函数");
};

document.body.onclick = function(){

	alert("我是body的单击响应函数");
};