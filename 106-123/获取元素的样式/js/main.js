//js

/*读取元素的样式

兼容性问题 --> 定义一个函数

正常浏览器 及其IE8以上： getComputedStyle(box1,null); 方法 两个参数 封装到一个对象中 
IE ： box1.currentStyle 属性 


*/

var box1 = document.getElementById("box1");
var btn01 = document.getElementById("btn01");
btn01.onclick = function(){
	// box1.style.width = "200px";
	//console.log(box1.style.width);//.style只能读取内联样式
	//console.log(box1.currentStyle.width); //.currentStyle只能IE8以下支持
	//var obj = getComputedStyle(box1,null);//正常浏览器支持
    //console.log(obj.width);//当width哪都没设置时，width跟随窗口变化而变化
    //console.log(obj.backgroundColor);//读取的RGB值

    alert(result);//函数（作用域）作用域可访问全局变量result
};

//解决兼容性问题
function getStyle(obj,name){

	if(window.getComputedStyle){
		return getComputedStyle(obj, null)[name];
	}else{return obj.currentStyle[name];}
	//三元云算法也可以 ，但是结构不清晰
	//return window.getComputedStyle?getComputedStyle(obj, null)[name]:obj.currentStyle[name];
}

var result = getStyle(box1,"width"); //函数（作用域）作用域可访问全局变量result
