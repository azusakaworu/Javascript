//js

/*正则表达式语法

----量词：设置一个内容出现的次数（只对前边的内容起作用）

{n} 正好出现n次
{m,n} 出现m到n次
{m,} m次以上

+ 至少一个，相当于{1，}
* 0个或多个，相当于{0,}
? 0个或一个， 相当于{0,1}



/^a/  以a开头
/s$/  以s结尾
/^s$/ 必须是s 只能是s

/^s|s$/  以s开头 以s结尾
--------*/




//是否含有8个a 连续的
var reg = /a{8}/;
var str = "aaaaa;ihdi'oihaaaasaaaaaa";
console.log(reg.test(str)); //flase



//是否含有8个ab   {}只对前面的有效-->加括号
var reg1 = /(ab){3}/;
var str1 = "ababab";
console.log(reg1.test(str1));


var reg2 = /ab{3}c/;
var str2 = "abbbccc";//abbbc有就行 后面不看了
console.log(reg2.test(str2));//ture


//出现1-3次
var reg3= /ab{1,3}c/; 
console.log(reg3.test("abc"));//true

//3次以上
var reg3= /ab{3,}c/; 
console.log(reg3.test("abbbbc")); //true


//+ 至少一个
var reg3= /ab+c/; 
console.log(reg3.test("abbbbc"));//true

//* 有没有都行 0或多个 {0，}
var reg3= /ab*c/; 
console.log(reg3.test("abbbbc"));//true


//？ 0个或一个 {0,1}
var reg3= /ab?c/; 
console.log(reg3.test("abbbbc")); //false


//检查一个字符串是否以a开头
var reg3= /^a/; 
console.log(reg3.test("abbbbc"));//true

//检查一个字符串是否以s结尾
var reg3= /s$/; 
console.log(reg3.test("abbbbcs"));//true

//特例：
var reg3= /^s$/; 
console.log(reg3.test("sabbbbcs"));//false 只能有s

//检查一个字符串是否以s开头 以s结尾
var reg3= /^s|s$/; 
console.log(reg3.test("sbbbbcs"));//true


//练习： 检查是否是手机号
var phoneStr = "13948310500";
var phoneReg = /^1[3-9][0-9]{9}$/;
console.log(phoneReg.test(phoneStr));

