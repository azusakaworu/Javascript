//js

/*数组的方法（之二）----------------------
遍历数组 ：将数组中所有元素都取出来

forEach(); 遍历数组 （代替for循环遍历数组）

1.需要一个函数作为参数

IE8以上版本可用

移动端无所畏惧，放心食用

*/

var arr = ["zbj","shs","tz","bgj"];
//函数做参数：避免申全局function
//arr.forEach(function(){document.write("ddddd"+"<br>");});//传匿名函数 作为参数


/*回调函数:-------------------------

我们创建，由浏览器调用的函数
有几个元素 这个函数就被浏览器调几次
每次执行时，浏览器会将遍历到的元素以实参形式传递出来
我们可以通过定义三个形参来获取元素

*/




console.log(arr);

//arr.forEach(function(a){console.log("a="+a);});

//通过定义三个形参来获取元素
arr.forEach(function(a,b,c){
	console.log("a="+a);   //元素的值  value -->当前正在遍历的元素的值
	//console.log("b="+b);  //索引 index -->当前正在遍历的元素的索引
	//console.log("c="+c);   //所有元素 数组 array-->当前正在遍历的数组
}
	);