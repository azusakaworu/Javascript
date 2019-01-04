//js

/*String对象

在底层字符串是以字符数组的形式保存的[h,e,l,l,....], 一个字符就是一个元素

1.属性 length ： 字符串长度

2.方法：字符串对象的大部分方法都不会改变原值

        charAt(); //返回指定位置的字符
        charCodeAt();
        fromCharCode();  这个方法得用构造函数方法去调用
        concat();//不推荐 不如用 + 字符串

        indexOf();
        lastIndexOf();


   //参数用法不一样，三选一用
        slice(); 这种最好！！
        substring();
        substr();

        split();

        toLowerCase();
        toUpperCase();



----------------------*/


//在底层字符串是以字符数组的形式保存的
var str ="hello dangdang";
console.log(str.length); //14 空格也算 
console.log(str[8]); //n



/*-----------String对象的方法-------------------*/

//charAt(); 根据索引获取字符
var result = str.charAt(0);
console.log(result); //h


//charCodeAt(); 根据索引获取字符编码（Unicode）
result = str.charCodeAt(1);
console.log(result); //e 的Unicode编码是 101



//fromCharCode(); 根据字符编码获取字符
result = String.fromCharCode(101);//这个方法得用构造函数方法去调用
console.log(result); //e

result = String.fromCharCode(0x2615);//如果是16进制 前面加0x
console.log(result);




//concat();连接字符串 不推荐 不如用 + 字符串
result = str.concat("hhhhhhhh");
console.log(result);



//indexOf(); 检索字符串 中是否有指定内容 前-->后
result = str.indexOf("h");
console.log(result);// 0 索引为0的位置 
result = str.indexOf("d");
console.log(result);// 6 索引为6的位置 (第一次出现的位置)


result = str.indexOf("d",7); 
console.log(result);// 10 从索引为7的地方开始找 

result = str.indexOf("p");
console.log(result);// -1 没有 返回-1


//lastIndexOf();  后-->前找
result = str.lastIndexOf("d");  //从后往前 
console.log(result);//10

result = str.lastIndexOf("d",6);  
console.log(result);//6






/*参数用法不一样，三选一用----------从字符串中截取指定内容*/


//method1：  slice(); 这种最好！！
var str1= "abcdefj";
var result1 = str1.slice(0,2);//包括开始0 不包括结束2
console.log(result1);

result1 = str1.slice(3);// 从三开始包括3 一直到最后
console.log(result1);

result1 = str1.slice(3,-1);// 从三开始包括3 到 倒数第一之前（不包括倒数第一）
console.log(result1);


//method2： substring();
//和 slice(); 区别： 不能有负值
result1 = str1.substring(1,2); //包括开始 不包括结束 
console.log(result1);

result1 = str1.substring(1,-1); //-1自动变0 第二个参数比第一个小时 自己并调整参数位置-->（0,1）
console.log(result1);




//method3： substr(); 不是标准定义，用时注意
result1 =str1.substr(1,5);//第二个参数是代表 截取多少个
console.log(result1);








// split(); 将字符串拆分为数组----和join();相反
var str2= "wsdang23333";
var result2 = str2.split(""); //空串 每个字符是一个元素
console.log(result2);
console.log(Array.isArray(result2)); //true 
console.log(result2[3]);
console.log(result2.length); //11

result2 = str2.split("d"); //根据d 分 d没了
console.log(result2);



// toLowerCase();
var str3 = "DDDDD";
var result3=str3.toLowerCase();
console.log(result3);

// toUpperCase();
result2=str2.toUpperCase();
console.log(result2);