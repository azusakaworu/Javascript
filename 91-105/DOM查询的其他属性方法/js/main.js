//js

/*DOM查询的其他属性方法----

属性： document.body --> 查询body标签
       document.documentElement  --> 查询HTML根标签
       document.all   --> 查询所有元素(要遍历打出)




var body = document.body;
//相等于var body = document.getElementsByTagName("body")[0];
//console.log(body);

var html = document.documentElement;
//相当于var html = document.getElementsByTagName("html")[0];
//console.log(html);

var all = document.all;//所有元素 
//相当于 var all = document.getElementsByTagName("*");
//console.log(all);
console.log(all[0]);
console.log(all.length);//15 随标签增加而增加
for(var i =0; i<all.length;i++){
	console.log(all[i]);
}

----*/



/*DOM查询的其他属性方法-----

方法： .getElementsByClassName(); 根据元素的class属性查询一组元素节点对象
                                  不推荐使用 IE9以上可以（兼容性不好）

       根据CSS选择器查询class ID 元素节点：
                                  
       querySelector();    只返回唯一一个元素 一堆里面 只返回第一个
       querySelectorAll(); 返回数组

---*/

// var box1 = document.getElementsByClassName("box1");
// console.log(box1);

var div = document.querySelector(".box1 div"); //查询class="box1"里的div
// console.log(div);
// console.log(div.innerHTML);

var box1 = document.querySelectorAll(".box1");
//console.log(box1);//返回的数组


var box2 = document.querySelectorAll("#box2");
console.log(box2); //即使只有一个也返回的数组
