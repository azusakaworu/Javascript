//js

/*

DOM 光操作HTML很单一 它还可以操作CSS

通过JS修改元素样式 
语法： 元素.style.样式名 = "样式值";

读取语法： 元素.style.样式名

.style 属性设置和读取都是针对内联样式 ，读不了css表里的

内联样式：在HTML标签里存放的css样式 较高优先级 会立即显示 -->覆盖住css样式表里的样式

*/

//点击btn01 修改box1大小
var box1 = document.getElementById("box1");
var btn01 = document.getElementById("btn01");
var btn02 = document.getElementById("btn02");

//点击btn01 修改宽度高度 
btn01.onclick = function(){
     
     box1.style.width = "145px";
     box1.style.height = "236px";
     box1.style.backgroundColor ="pink";//用驼峰命名法修改 不然会被当做减号

};

//点击 btn02读取box1 里的样式
btn02.onclick = function(){
   alert(box1.style.backgroundColor);//读取当前样式值
   alert(box1.style.width); //内联样式没有的样式 返回啥都没有
}