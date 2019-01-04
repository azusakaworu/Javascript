//js

/*arguments (先了解)
在调用函数时，浏览器每次都会传递两个隐含的参数：
1.this 函数的上下文对象
2.封装实参的对象 arguments
      - arguments是一个类数组对象（不是数组，但具有数组的功能）
      可以通过索引来操作数据
      也可以获取length
      在调用函数时，我们所传递的实参 都在arguments里保存
      即使不定义形参，也能通过arguments来使用实参（定不定义形参 ，都不影响arguments保存实参）
      arguments[0] 表示第一个实参
      arguments[1] 表示第二个实参

      arguments里的一个属性：callee -->这个属性对应的一个函数对象（当前正在执行的这个函数对象）

----------------------*/

function fun(a,b){ //定不定义形参 ，都不影响arguments保存实参
	//console.log(arguments instanceof Array);//false 不是数组 检查是不是数组 方法一
	//console.log( Array.isArray(arguments)); //false 检查是不是数组 方法二
	//console.log(arguments.length); //2 实参数量
	//console.log(arguments[0]); //hhh
	console.log(arguments.callee);
	console.log(arguments.callee ==fun); //ture
}
fun("hhh","kkk");