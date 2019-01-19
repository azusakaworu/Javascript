//js

/*事件的传播（IE8以上）

三个阶段： 1 捕获阶段： (第三个参数false：只找) 外--> 内
          2 目标阶段： 找目标 找到以后 (触发事件)
          3 冒泡：     (触发事件) 内--> 外


---------------*/

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");

box1.addEventListener("click",   function(){alert("我是box1");}, false);//一般都是false 不想在捕获阶段触发事件
box2.addEventListener("click",function(){alert("我是box2");},false);
box3.addEventListener("click",function(){alert("我是box3");},false);