//javascript


/* 逻辑运算符-------------------*/

// !  非
var a = true;
    a = !a;
console.log("a = " +a); //flase 

var b = true;
    b = !!b;
console.log("b = " +b); //true  两次取反 无变化


var b1 = "";
    b1 = !!b1;
console.log("b1 = " +b1); //空串 false 用!!  string-->boolean
console.log(typeof b1);//自动转boolean  原理同Boolean()函数






// &&  与 (找false)
var result = true && true; //true  只有两个都为true 才返回true
    result = true && false; //false

    result = false && true; //false 如果第一个值为false，就不看后面的值了
    result = false && false; //false

result = false && alert("look at me !"); //不出来
console.log("result = " + result); 



//  ||  或  (找true)
var result1 = true || true;//true  只要有一个true，就是true
    result1 = true || false; //true

    // 第一个值为true， 就不看后面的值了
   
    result1 = false || true; //true

    result1 = false || false; //false 两个都是false，才返回false

     // 第一个值为false， 会往后看

    result1 = true || alert("look at me !");

console.log("result1 =" +result1); 



/*非布尔值---逻辑运算-----记住！--------------------------*/
var fei = 1 && 2; //运算时是转Boolean 但返回原值
console.log("fei = " + fei); //2 第一个值是true，返回第二个值
console.log(typeof fei); 

var fei1 = 0 && 2; 
console.log("fei1 = " + fei1); //0 如果第一个是false，则直接返回第一个值
console.log(typeof fei1); 

var fei2 = 1 || 2;
console.log("fei2 = " + fei2); // 如果第一个是true，直接返回第一个值
console.log(typeof fei2); 

var fei3 = NaN || 2;
console.log("fei3 = " + fei3); // 如果第一个是false，直接返回第二个值
console.log(typeof fei3); 


var result2 = "" || "hello"; //hello
    result2 = -1 || "hello"; //-1
console.log("result2 =" +result2);