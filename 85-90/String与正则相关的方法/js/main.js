//js

/*String对象和正则表达式相关的方法

split();  自动全局匹配
search(); 不能全局匹配 只会查找第一个
match();  默认找到一个就stop --> 设置完全局匹配模式 g (global)
replace();默认找到一个就stop

--------*/




// split(); 字符串拆成数组
var str = "1a2b3c4d5e6fgggg";
var result = str.split(/[A-z]/); //这里可以传递一个正则表达式的参数
                                 //用任意字母来拆分
console.log(result);



// search();  像indexOf(); 搜索是否含有指定内容 搜(索引)
var str1 ="hello a dangd aef afc";
var result1 = str1.search(/a[bdf]c/); //第一次搜索到的索引 没有-1 
                                  //区别：可接收正则表达式
 console.log(result1);



// match(); 找到一个或多个正则表达式匹配的内容，从一长串字符串里提取出有规则的东西 取(内容)
var str2 = "hello dang Dang 123 999";
var result2 =str2.match(/[a-z]/ig); //gi ig都行 或者 /[A-z]/g
console.log(result2); 
console.log(typeof result2); 
console.log(Array.isArray(result2));  //即使一个元素 也是数组
console.log(result2[7]); //n 空格不算




// replace(); 指定内容替换成新内容
//两个参数： 1.被替换的内容 (可接收正则表达式)   2.新内容
var str3 = "hahahah swk zbj";
var result3 = str3.replace(/a/g,"*");
console.log(result3);//h*h*h*h swk zbj
var result3 = str3.replace(/a/g,"");
console.log(result3); //a都被删了 空串