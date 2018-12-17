//javascript



/*typeof-------------检测数据类型-------------（一元运算符）--*/
var a =123;
var result = typeof a;
console.log(result); //--> number

//typeof 返回值都是字符串，只不过这个字符串描述的是不同数据类型
console.log(typeof result); //--> string





/* arithmetic operator 算术运算符-------------(二元运算符) */
//先转number 再运算（除了字符串加法）
var b = 123;
var result = b + true; // -->124   true = 1 , false = 0

    result = b + null; // --> 123  null = 0

    result = b + NaN; // -->NaN    任何数和 NaN 运算，都得NaN

    result = "123" + "456" ; // --> 123456  字符串相加，拼串 

    result = "have a" + 
             " good day"; //长字符串 ，用+ 美化格式 

    result = "1" + 123; //--> 1123 任何值和string相加， 先转string 再拼串



console.log(result);
console.log(typeof result);


var c = 123;
    c = c + "";
// console.log(c);
// console.log(typeof c); //加空串 自动转string(隐式类型转换) 这种方法更常用
                       //实际上相当于 c = String(c);

console.log("c= "+c ); //方便查看结果        



//任何值做 - * / 都自动转number
result = 100 -"3";

result = 100 - true;

result = 3 * null;

result = true * undefined;

result = "3" + 4; // --> 34 string

result = 2 * "8"; //16 number

result = 3/2;

console.log(typeof result);
console.log("result =" + result);    


var d = "100";
    d = d - 0;
console.log(d);
console.log(typeof d); // --> string自动转number  -0 *1 /1 都行 （只了解 还有更简单的方式）