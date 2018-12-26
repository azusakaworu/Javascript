//js

/*全局作用域----------------------
  
js文件里（script标签内所有code

页面打开开始创建，页面关闭时销毁

全局对象window，由浏览器创建，可直接使用

window.变量  //window对象里的（变量）--> 属性
window.fun(); //window对象里的(function) -->方法

*/



function qjzyy(){
	var a = "局内a"; //这个a作用域在函数内部 ，外部看不到
}
var a = "局外a";  //这是全局a
 qjzyy();

console.log(a);//局外a
console.log(window.a);//局外a
console.log(typeof window);


//window.alert("全局作用域的函数 ，都会作为 \nwindow对象的方法 保存");




/*-----------------变量声明提前-------------------

console.log(b);

//var b = "变量声明提前"; //写语句后面的话有var，undefined 。var声明提前（未赋值，语句下一行才赋值）
b = "变量声明提前"; // 写后面的话：没var ，找不到声明的变量名字 -->报错

//所以：都最好写var，并写在执行语句之前。按顺序写
*/
fun1();//可以提前调用
function fun1(){console.log("我是fun1函数");} //这种方式 创建的函数 代码执行优先级高

console.log(fun2); //变量有了 未赋值
var fun2 = function(){console.log("我是fun2函数");}//这种方法调用提前会报错，只能后调
fun2();

//so 创建函数哪种方式都是，并且后调 

/*函数作用域--------（局部）--------------
  
  调用函数时创建，函数执行完毕以后，函数作用域销毁
  每调用一次函数，就会创建一个新的函数作用域，他们之间相互独立

  函数作用域中，可以访问到全局作用域中的变量 例子：x
  全局作用域中，无法访问到函数内的变量

  函数作用域中操作变量时，现在自身作用域中找，有-->直接用，
  没有-->向上一级（不一定是全局）找，直到全局，如果全局都没有-->报错

  function内 不写var的变量 就成了全局变量 外部访问的到 so 函数内的变量一定都写var

  定义形参相当于函数作用域里声明了变量

*/
var x = 10;//全局变量

function fun3(){
	var x ="我是函数作用域里的x";
	console.log(x); //就近原则 
	console.log(window.x); //特指访问全局变量 --> 前面加 window
	 var y = 20;
}
fun3();
console.log(x); //全局x

//console.log("quanjv"+ y); //调用后 函数内变量前写了var 全局访问不到，不写var 就能访问到
                            //因为function内 不写var 就成了全局变量
                            //so 函数内的变量一定都写var



var e = 3;
function fun4(e){  //定义形参相当于函数作用域里声明了变量
	//var e;
	alert(e);
}
fun4();//调用时赋值 