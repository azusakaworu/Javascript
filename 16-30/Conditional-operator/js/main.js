//javascript

/*三元（条件）运算符-------------三个操作数------------*/

//条件表达式？语句1:语句2;
//true --> 语句1
//false --> 语句2

var a = 10, b = 20,c = 50, d=100;
//a>b?alert("a大"):alert("b大"); //flase-->b大


//获取a b 最大值

var max = a>b?a:b;
//获取 a b c 最大值
    max = c>max?c:max;
    max = d>max?d:max;
console.log("max =" +max);


var pink = "fenpupu"?a:b; //非Boolean 先转布尔值  string(除了空串）-->true
console.log(pink);


//运算符优先级 不确定 用 （ ）
var result = 1 || (2 && 3) ;
console.log("result =" + result); //1