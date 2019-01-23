//js
/*BOM：History对象：可以用来操作浏览器向前或向后翻页

length 属性 可以获取到当次访问的连接的数量

history.go(1); 参数要整数

history.back();
history.forward();

----------*/

alert(history.length);

var btn = document.getElementById("btn");
btn.onclick = function(){
	//history.back();
	//history.forward();
	history.go(1);//向前跳转一个页面  
	history.go(-1);//向后跳转一个页面
	history.go(-2);//向后跳转2个页面
};