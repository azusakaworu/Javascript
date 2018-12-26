//js

/*函数----------------------*/


//method 0 构造函数（不推荐
var fun0 = new Function("console.log('这是我的第一个函数');");//字符串形式保存code在()里
console.log(fun0);
console.log(typeof fun0);//function
fun0();




//method 1---函数声明---这种方式最好，不用申请变量
/*
    function 函数名 ([形参1，形参2，....形参N]){code.....}   

*/

function sum(a,b)
{console.log(a+b);
console.log("a="+a);
console.log("b="+b);//undefiend
}

sum(1); //NaN
//console.log("sum=" +sum);//sum代表整个函数



/*function 的返回值---------------------------------------------*/
function sum1(a,b,c){
	
	//var d = a+b+c;
	return a+b+c; //返回结果， 不要进行任何操作，function是算结果的工具
	//alert("where i am");//return后面的code是死代码，不执行
}

var result = sum1(1,2,3); //result 的值就是该function的返回结果
console.log("result="+result);//拿着这个结果去做骚操作


               





//method 2---函数表达式
/*
    var 函数名 = function ([形参1，形参2，....形参N]){code.....};
    
    相当于赋值语句，结尾最好加 ; semicolon

    function(){code...} 匿名函数， 赋值给一个变量
*/



//练习1：定义一个函数，判断一个数字是否是偶数，如果是返回true，否则返回false
function ou(a1){
		// var e = a1%2 == 0;
		// return e;

		//或者直接写成 
		return a1%2 == 0;
}
var result1=ou(20);
console.log("result1="+result1);


//练习2： 定义一个函数，可以根据半径计算一个圆的面积，并返回计算结果
//圆的面积：3.14*r*r

function yuan (r){
     return 3.14*r*r;
}
var result3 = yuan(5);
console.log("result3= "+ result3);







//练习3； 创建一个函数，可以在控制台输出一个人的信息： name age gender address

function sayH(o111){ //形参和后面的ooo1.name等都是形式主义， 实参赋值后都会更新成obj.name等等
         console.log("i am "+o111.name+",this year i am "+o111.age+
         	" years old,"+"i'm a "+o111.gender+",located in "+o111.address);
}

//创建对象
var obj = {
       name:"swk",
       gender:"male",
       age:18,
       //不用顾忌顺序了
       address:"hgs"
}
sayH(obj); //对象名 实参可以是对象


//实参也可以是function （function也是一种对象）
function fun000(a){
	console.log("a =" +a);
	//a(obj); //此时a是sayH函数  相当于 sayH(obj);
}
fun000(sayH);

//将匿名函数作为实参！（经常用）
fun000(
	function(){alert("匿名函数做实参");}
	)

//把上面求圆的面积function作为参数
fun000(yuan);   //相当于直接使用函数对象
fun000(yuan(10)); //相当于使用函数的返回值

/*无别：
yuan(); //调用函数(把 制造机器制造的 结果给你)
yuan    //函数对象 （把制造机器给你）

*/





/*立即执行函数----------------------------------*/
//刚定义完就使用， 就用一次， 用完就扔
(function (){alert("立即执行函数");})(); //无参数版

(function(x,y){document.write(x+y);})(3,4);//有参数版