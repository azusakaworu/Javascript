//js

/*数组------（內键对象）----------------
数组就是对象的一种

数字作为索引，操作 元素（对象里叫属性，数组里叫元素）
索引：从0开始的整数

索引相当于属性名。

数组存储性能比普通对象好，经常用来储存数据

元素的值可以是任意数据类型

*/

/*method 1 构造函数方式创建array-----------------------------------------*/

var arr = new Array();
    //添加元素 语法 数组[索引]=值
 arr[0]=10;
 arr[1]=22;
 arr[2]=33;
 arr[3]=44;
 //arr[10]=100;
    
console.log(arr[2]);//读取 数组[索引]
console.log(arr[5]); //不存在的 undefined 

console.log(arr);
console.log(typeof arr); //object

// arr.length=2; //少于length做删除
// arr.length=10;//多出的有空位
// console.log(arr);

arr[arr.length]=55;//给最后一位后面加新的元素
                    //语法：  数组[数组.length]=值;
console.log(arr.length); //数组.length (得是连续性数组)
console.log(arr);

// arr.hello ="avc"; 也可以加属性，但是毫无意义
// console.log(arr);



/*method 2 字面量方式创建array-----------------------------------------*/
var arr1 = [
      "dang","ling","xin","zhi","ka","bi"
];

console.log(arr1);
console.log(arr1[3]); //zhi 

var arri = [10]; //值是数字
console.log(arri);

/*method 3 构造函数传参方式创建array------------------(不好用）-----------------------*/
var arr2 = new Array("w","s","l","d"); //字符串参数 代表值 
console.log(arr2);
console.log(arr2[3]); //d

var arr3 = new Array (10); //数字参数：代表length为10 不是值
console.log(arr3);


//元素的值是对象
var obj = {name:"swk"};
    arr[arr.length] = obj; //给arr数组加元素 此元素是一个对象
console.log(arr);


var arr4 = [{name:"zbj"},{name:"bgj"},{name:"zzj"},];//直接大括号里加 三个元素
console.log(arr4);
console.log(arr4[2]);
console.log(arr4[2].name); //zzj


//元素的值是function
 arr4[arr4.length]= function (){alert("hi");}; //匿名函数
console.log(arr4);
//arr4[3](); //用索引调用数组里的函数


//元素的值是数组----数组里放数组：二维数组(用得不多)
var arr5 = [["haha","lala","wowo"],["hah","lal","wow"],["ha","la","wo"]]
console.log(arr5);
console.log(arr5[2]);

var funa =function (){alert("hi~");};
var arr51 = [funa];
console.log(arr51);
//arr51[0]();


/*数组的四个方法-----------------（常用）-------------*/
arr5.push("tz","blm");//可以从末位开始添加多个元素
console.log(arr5);

arr5.pop();
console.log(arr5);

arr5.unshift("添加在前面"); //从开头添加元素
console.log(arr5);
arr5.shift();
console.log(arr5);

console.log(arr5.__proto__.hasOwnProperty("pop"));

