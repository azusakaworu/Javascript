// js document 


/* 转换 string --------------------------------------------------------------- */

//method 1  调用被转换数据类型的 toString()方法
            //null 和 undefined 转不了会报错
var a = 123;

console.log(a);
console.log(typeof a); //data type:number 123

var a = a.toString();
console.log(a);
console.log(typeof a);//data type:string 123



var b = true;
console.log(b);
console.log(typeof b);//data type: boolean

var b = b.toString();
console.log(b);
console.log(typeof b);//data type: string 



//method 2  调用String()函数，并将其转换的数据作为参数传递给函数
            // null 和 undefined 可转成"null" "undefined"
var c = 123;
    c = String(c);

console.log(c);
console.log(typeof c);




var d = false;  //boolean --> string
    d = String(d);

console.log(d);
console.log(typeof d);      



var e = null;  //null --> string 
    e = String(e);
console.log(e);
console.log(typeof e);



var uf = undefined;  //undefined --> string 
    uf = String(uf);
console.log(uf);
console.log(typeof uf);




/* 转换成 Number --------------------------------------------------------- */

//method 1 Number()函数
var h = "123";
    h = Number(h);
console.log(h);        //123
console.log(typeof h); //number


var k = "meawo";
    k = Number(k);
console.log(k);         // NaN(只要有非数字就转成NaN)
console.log(typeof k);  //number


var kk = "   "; 
    kk = Number(kk);
console.log(kk);        //空串转成 0
console.log(typeof kk);    


var g = true;
    g = Number(g);
console.log(g);         //ture --> 1
console.log(typeof g);


var p = false;
    p = Number(p);
console.log(p);        //false  --> 0
console.log(typeof p);


var w = null;
    w = Number(w);
console.log(w);        //null --> 0
console.log(typeof w);    


var un = undefined;
    un = Number(un);
console.log(un);        //undefined --> NaN
console.log(typeof un);





//method 2 (如果是含有非数字的字符串， 想取出整数 或 浮点数)

var l = "123px";
    l = parseInt(l);
console.log(l);        //取出整数123
console.log(typeof l);    


var j = "789.003px";
    j = parseFloat(j);

console.log(j);        //取出小数（浮点数）789.003 （只取有效小数）
console.log(typeof j);


var lj = "789.003px";
    lj = parseInt(lj);
console.log(lj);       //用 parseInt 取整
console.log(typeof lj);    



          //非string 用 parseInt 或 parseFloat : 先转成string，然后再操作
var z = true;
    z = parseInt(z);
console.log(z);       // string "ture" --> NaN 
console.log(typeof z);    






/* 了解一下： 其他进制数字 --------------------------------------------------------- */


//16 进制 0x 
var y = 0x10;    //0xff , 0xCafe, 
console.log(y); //16



//8 进制 0开头
var unm = 070;
console.log(unm); //56

//2进制 用的不多 浏览器兼容性不好 0b 开头


//string --> number
 var yu = "070"
     yu = parseInt(yu);
    console.log(typeof yu);
    console.log(yu);
    //有些浏览器会把这个当成8进制，有些当成10进制
    //解决办法--> 加第二个参数

 var su = "070";
     su = parseInt(su,8);
    console.log(typeof su);
    console.log(su);
    //尽量不要用0开头表示数字 很麻烦




/* 转换成 Boolean --------------------唯有js 可以做------------------记住！--------------------- */
// method 1 : Boolean()函数

var bo = 123;
    bo = Boolean(bo);
console.log(bo);       //true 数字转Boolean 除了0，NaN 其余都是True
console.log(typeof bo);    

var bo1 = "hhhhhh";
    bo1 =Boolean(bo1);
console.log(bo1);     //true  string 转Boolean 除了空串 其余都是True
console.log(typeof bo1);  

//Null , undefined --> false

//object -->ture  

//method 2 : !! 隐式类型转换成Boolean 用两次非运算 (推荐 更简单)
var bo2 = "hahahahah";
    bo2 = !!bo2;
console.log(bo2); //true
console.log(typeof bo2); //boolean







