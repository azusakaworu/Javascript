//javascript


/*赋值运算符----------------------------------------*/
var a = 10;
    a += 5; // a = a + 5
console.log("a = " + a);

/*关系运算符----------------------------------------*/
//关系成立返回true 不成立返回false

var result = 5 > 10;//false
    result = 5>= 5; //true  大于 or 等于 
console.log("result =" +result); 



//非数值情况---先转数字
console.log( 1 > true); //false  true-->1
console.log( 1 >= true); //ture
console.log( 1 > "0"); //ture
console.log( 10 > null); // null --> 0 ture

console.log(10 > "hello"); //"非数字" --> NaN 
                           // NaN 和任何值作比较 都得false

console.log(10 > undefined); //undefined --> NaN

console.log( true > false);  //true -->1 false-->0

console.log(20 < true); 

console.log("11"<"5"); //true
                       //两侧值都是字符串, 不会转number, 是比较unicode编码排序，
                       //第一位和第一位比，（第一位比出来了就不看后面了）
                       //如果两位一样，则比较下一位
                       //数字型字符串，不要比，比前先转number

console.log("a" > "b"); //false 0061>0062
console.log("bbc" > "b");// 第一位一样 ，第二位后者没有 --> 前者大 true
console.log( "abc" <"bcd");//对英文进行排序 ture



/*unicode 万国表*/

console.log("\u2620"); //16进制

console.log("\u2602");
console.log("\u2603");

console.log("\u2615");
console.log("\u2605");


/*相等运算符--------------判断两个值是否相等--------------*/
//相等--> ture  不相等 --> false

var a = 10;
console.log(a == 4); //false 一个等号变赋值了

console.log("1" == 1); //如果两个值类型不同，则自动转换 成为相同类型，再比较 
                       //转成什么不一定， 大部分情况转成Number

console.log(true == "1"); //都转成了Number
console.log(null == 0); // false null没有转Number

//特殊情况 undefined 衍生自 Null 
console.log(undefined == null); // 所以这两个值作比较 --> true



//NaN 不和任何值相等，包括它本身
console.log(NaN == NaN); //false
console.log( NaN == null); //false

var be = NaN;
console.log(isNaN(be)); //ture isNaN()函数 来判断一个值是否为 NaN


//不相等 !=   判断是不是不相等
//不相等 --> true 相等--> false

console.log(10 != 5); //ture
console.log(10 != 10); //false

console.log("1" != 1); //自动类型转换， 转换后相等--> false


//全等 ===  （不做自动类型转换）类型不同--> false
console.log("123" == 123); //ture
console.log("123" === 123); //fasle

console.log(null == undefined); //ture
console.log(null === undefined); //false


//不全等 !==  (不做自动类型转换)  类型不同--> ture
console.log("1" != 1); //false 
console.log("1" !== 1); //ture


