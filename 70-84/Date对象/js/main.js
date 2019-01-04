//js

/*Date对象- 

来表示一个时间
1.创建 ：不传参
       ：传参

Date对象的方法：
   getDate(); 几号
   getDay();  星期几 0-6
   getMonth(); 几月份 0-11
   getFullYear(); 年份

   getTime();//单位毫秒 为了统一单位
             时间戳：格林威治标准时间（1970/1/1,0:0:0)到现在的毫秒数（1秒=1000毫秒
             计算机底层保存时间都是用的时间戳
             底层会自己转换这个单位time/1000/60/60/24/365 1970年至现在花了多少多少年
             

----------------------*/
console.log(Date);//Date();构造函数  是函数对象

//创建Date 对象
var d = new Date(); // <-- 这个代码执行的时间(如果直接使用构造函数创建一个Date对象)
console.log(d);


//创建一个指定的时间对象： 需要在构造函数中传递一个表示时间的字符串作为参数
var d2 = new Date("12/25/2018 11:10:10");
console.log(d2);

var date = d2.getDate();//几号
console.log("date="+date);

var day = d2.getDay();//0-6 0-->sunday 
console.log("day="+day);

var m = d2.getMonth();// 0-11 11-->December
//console.log("Month="+m);
console.log("Month="+(m +1)); //方便看 加1

var year = d2.getFullYear();
console.log("year="+year);



//getTime(); 获取当前时期对象的时间戳
var time = d2.getTime();
console.log(time);

var d3 = new Date("1/1/1970 0:0:0");
time = d3.getTime();
console.log(time); //18000000 距离格林的时差



//获取当前时间戳
time = Date.now(); // <-- 这一行执行时的时间戳
console.log(time);

//检测性能（不好用）console.time("test"); console.timeEnd("test");跟好用 详见质数js
// var start= Date.now();
// for(var i=0; i<100;i++){
// 	console.log(i);
// }

// var end= Date.now();
// console.log("执行了"+(end-start)+"毫秒");