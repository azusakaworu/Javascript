//js

/*包装类

基本数据类型：String Number Boolean Null Undefined

引用数据类型：Object 
                --> function Array Math Date

三个包装类：基本数据类型数据-->转换为object
           都是构造函数：
           String();  将基本数据类型 字符串 转换为String对象
                      string对象的方法很多


           Number();  将基本数据类型 数字   转换为Number对象
           Boolean(); 将基本数据类型 布尔值 转换为Boolean对象

注意：基本数据类型的object 开发中不用，比较结果容易出问题
 
这是浏览器底层自己偷偷用的（临时）

----------------------*/


/*
当我们对基本数据类型的值 去 调用属性和方法时
 浏览器会临时将其（包装）转为对象然后再调用对象的属性，方法
调用完以后，再转回基本数据类型

 */
var s =123;
s = s.toString(); //toString();可以用
console.log(s);
console.log(typeof s); //string

s.hello="hello"; //临时添加一个对象 之后销毁
console.log(s.hello); //又临时加一个对象 但找不到hello的值了 undefined



//注意：基本数据类型的object 开发中不用，比较结果容易出问题 如下
 
// var num = new Number(3);
// var num2 = new Number(3);
// console.log(typeof num); //-->object

// var str = new String("hello");
// console.log(typeof str); //-->object

// var bool = new Boolean(true);
// console.log(typeof bool); //-->object

// //向num中添加一个属性
// bool.hello= "dangdang";
// console.log(bool.hello); //object 功能更强大

// var a = "haha";
// a.hello= "pupu";
// console.log(a.hello); //基本数据类型加不了属性 undefined

// console.log(num == num2); //false 内存地址不一样 


