//js

/*事件简介

  事件：Event --> 用户和浏览器之间的交互行为

       （文档或浏览器窗口中发生的一些特定的交互瞬间）
       就是事

       比如：点按钮，拖动窗口，close window ，鼠标窗口里晃动
       关键是如何处理事件
                      --> 在事件对应的属性（onclick, ondblclick,onmousemove....）中设置js代码，事件被触发时，代码执行

--------*/

//获取按钮对象
var btn = document.getElementById("btn");
console.log(btn);//确认获取到没

//绑定一个单击事件
btn.onclick = function(){

	//事件被触发时，才执行
    alert("讨厌你点我干嘛"); 
};//为单击事件绑定的函数，叫单击响应函数