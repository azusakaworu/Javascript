//javascript 


/*一元运算符*/

//typeof 


/*+ - 正号 负号---------------------------------------------*/
//number 类型 
var a = 123;
    a = +a; //正号不影响原值
    a = -a;// 负号 取反
console.log("a = " + a);    


//boolean string
var boo = true;
    boo = +boo; // 非number类型 加正号 自动转number 与Number()函数同理
    //boo = -boo;
console.log(typeof boo);
console.log("boo = " + boo);

var str = "18"; 
    str = +str;
console.log(typeof str);
console.log("str = " + str);

var str1 = "meawo";
    str1 = +str1;  // + - 都是NaN ("非number" --> NaN)
console.log(typeof str1);
console.log("str1 = " + str1);



var str2 = 1 + +"2" + 3;
console.log("str2 = " + str2); //6 加正号 把字符串2 变成了 数字2





/* 自增 ++ 自减--   -------------------------------------------------*/

//a++ 自增前
var c = 1;
    c++;
    c++;
    c++;

console.log("c = " +c); //2 3 4 每调一次加一



//++a 自增后
var d = 1;
    ++d;
    ++d;
    ++d;

console.log("d = " +d); //a++ ++a 结果一样
                        //但 a++ ++a 值不同

var e = 1;
    //e++;
console.log(e++); //1
console.log("e = " +e);//2

var f = 1;
    //e++;
console.log(++f); //2 
console.log("f = " +f);//2


// var g = 20;
// var result = g++ + ++g + g; // 20 + 22 + 22
// console.log("result = " +result); //64

var g = 20;
var g = g++ + ++g + g; // 20 + 22 + 22
console.log("g = " +g); //64


var q = 20;
    q = q++; //值又变回去了
console.log("q = " +q);//20

var q1 = 20;
    q1 = ++q1;
console.log("q1 = " +q1); //21


//a-- 自减前
var num = 10;
    num--;
console.log(num--);//9
console.log("num = " +num); //9 8




//--a  自减后
var num1 = 10;
    --num1; //9
console.log(--num1);//8
console.log("num1= " +num1); //8




//练习

var n1 = 10, n2 = 20;
var n = n1++;
console.log("n = " +n); //10
console.log("n1 = " +n1); //11

    n = ++n1;
console.log("n = " +n); //12
console.log("n1 = " +n1); // 12

    n = n2--;
console.log("n = " +n); // 20
console.log("n2 = " +n2); //19

    n = --n2;
console.log("n = " +n); //18
console.log("n2 = " +n2); //18
