//js

/*正则表达式语法---元字符:拥有特殊含义的字符

. 任意字符

\w  任意字母 数字 下划线 [A-z0-9_]
\W  [^A-z0-9_]

\s 空格
\S 除了空格

\b 单词边界
\B 除了单词边界

\d 任意数字 [0-9]
\D [^0-9]


--------*/

//是否有 .
var reg = /./;
    reg = /\./; //像表达单纯的点 用转义字符
console.log(reg.test("d;h;.g"));

//是否有 //
var reg = /\\/;   // \\--> \
console.log(reg.test("\\"));

/*构造函数转义字符  是字面量转义字符的双倍*/
var reg1 = new RegExp("\\.")
console.log(reg1.test("."));

var reg1 = new RegExp("\\\\") // \\\\表示\\转义
console.log(reg1.test("\\"));




//\w
var reg2 = /\w/;
console.log(reg2.test("_"));
//\W
var reg2 = /\W/;
console.log(reg2.test("_")); //flase

//\d
var reg2 = /\d/;
console.log(reg2.test("2087"));

//\D 除了数字
var reg2 = /\D/;
console.log(reg2.test("9866"));

//\s 空格
var reg2 = /\s/;
console.log(reg2.test("9 迟迟未")); //ture

//\S 除了空格
var reg2 = /\S/;
console.log(reg2.test(" ")); // 只要有内容就是true 只有空格--> flase



// \b 单词边界
var reg3 = /\bchild\b/;
console.log(reg3.test("hello child ren ")); //ture

// \B 除了单词边界
var reg3 = /\Bchild\B/;
console.log(reg3.test("hellochildren ")); //true



//接收一个用户的输入  自动取出 内容前后的空格
var str = prompt("enter your username");
str = str.replace(/^\s*|\s*$/g,""); //空串 删 空格
console.log(str);