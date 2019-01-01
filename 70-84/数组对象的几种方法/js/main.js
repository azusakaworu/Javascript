//js

/*数组的方法（之四）end----------------------

concat(); 合并数组（不影响原数组）

join();    array转成字符串（不影响原数组）

reverse(); 反转数组

sort();    给元素排序

*/

//影响原数组，直接输出。
//不影响原数组，取一个变量result，输出result

/*concat();------------------合并数组（不影响原数组）-------------------------*/
var arr =["披萨","元旦","招财","小菊","锄禾"];
var arr2 =["小迷糊","柿子","石牛"];
var arr23=["鹌鹑"];
var result = arr.concat(arr2,"妞妞",arr23);//拼成一个数组
console.log(result);
 

/*join();------------------array转成字符串（不影响原数组）--------*/
var arr3 =["我","是","当","当",];
var result = arr3.join("0");//空串-->一行 不填-->逗号隔开
console.log(arr3);
console.log("arr3="+result);
console.log(typeof result);



/*reverse();------------------反转数组-------------------------*/
arr3.reverse();
// console.log("arr3="+arr3);
// console.log(typeof result);//任何类型和string做加法会变成string
console.log(arr3);


/*sort();------------------给元素排序-------------------------*/
arr.sort();
console.log(arr);//默认按Unicode编码来排序

var arr4 = [1,3,2,5,8,9,6,4,7]; //数字的数组
//写一个回调函数
arr4.sort(function(a,b){
	
    //return a-b;//升序
     return b-a;//降序

});
console.log(arr4);