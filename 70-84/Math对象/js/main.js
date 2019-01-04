//js

/*Math
是个普通对象 并不是函数
工具类 不用创建对象

里面封装了数学运算相关的属性，方法

----------------------*/


//属性
console.log(Math);
console.log(Math.PI);// Math.PI属性 大写表常量


/*----------------几种常用的math方法------------------------------*/
document.write(Math.abs(-3)); //绝对值


//专门针对数字取整：
console.log(Math.ceil(1.1)); //上舍入
console.log(Math.floor(1.9)); //下舍入 向下取整
console.log(Math.round(1.9)); //四舍五入





/*取一个0-1之间的随机数 Math.random();

生成一个x-y之间的随机数： 
Math.round(Math.random()*（y-x) +x)


生成一个0-x 之间的随机数：
Math.round(Math.random()*x)

*/
console.log(Math.random()); 

// for(var i=0; i<10; i++){
// 	console.log(Math.random());
// }


for(var i=0; i<10; i++){
	//console.log(Math.round(Math.random()*10)); //乘10 并取整//0-10
    //console.log(Math.round(Math.random()*9) +1);//1-10
    //console.log(Math.round(Math.random()*8) +2); // 2-10
} 




//最大值 最小值 (多个值 不限量)
var max = Math.max(10,20,30,1);
console.log(max);

var min = Math.min(10,20,30,1);
console.log(min);



//Math.pow();
console.log(Math.pow(3,4)); //3的四次幂 3*3*3*3= 81

//Math.sqrt(); 开方
console.log(Math.sqrt(9)); //9的平方根 3
console.log(Math.sqrt(81)); //81的平方根 9