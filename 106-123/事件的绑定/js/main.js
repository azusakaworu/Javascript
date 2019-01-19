//js

/*事件的绑定

方法 ： addEventListener();  同时为一个元素的 相同事件 同时绑定多个响应函数（按顺序执行）
                            还有一些特殊事件必须它来绑定
                            IE8不支持

三个参数 ： 1. 不要on 事件的字符串 "click"
           2. 回调函数 （事件触发时改函数会被调用）
           3. false （在捕获阶段不触发事件，false 一般是false 
                                          true--> 在捕获阶段触发事件

------------------------*/

var btn01 = document.getElementById("btn01");

/*这种方式 对象.事件=函数 的形式只能同时为一个元素绑一个响应函数 如果绑多个 只有最后一个生效

btn01.onclick = function(){
	alert("泥奏凯");
};

btn01.onclick = function(){
	alert("泥还不奏凯");
};

*/

btn01.addEventListener("mouseover",   function(){alert("泥奏凯");},   false);
btn01.addEventListener("mouseover",function(){alert("泥还不奏凯");},false);
