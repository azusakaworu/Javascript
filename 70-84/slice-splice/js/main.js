//js

/*数组的方法（之三）----------------------

slice();   提取指定元素(不影响原数组）

splice();  删除指定元素，并向数组添加新元素


*/

/*slice();----------------------截取出一个新数组--------------------*/


var arr = ["死后文","甜辣椒","特别车队","捉迷藏"];
console.log(arr);
var result = arr.slice(0,2); //截取： 索引0开始(包括0) 2之前(不包括2)
                             //不影响原数组，所以要创建一个result变量来获取结果
console.log(arr);

var result = arr.slice(2,3); //特别车队
console.log(result);

var result = arr.slice(0,-1);//截取到 倒数第一之前
console.log(result);

var result = arr.slice(1,-2);//甜辣椒
console.log(result);

var result = arr.slice(2);//第二个参数省略不写 --> 自动截取到最后
console.log(result);



/*splice();----------------------删除指定元素-------并向数组添加新元素-------------*/
//用处1：删除指定元素
var arr1=["刘备","张飞","关羽","曹操","孙策","周瑜"];
console.log(arr1);


//arr1.splice(0,2);// 从0开始(包括0），删除两个元素
//arr1.splice(3,1);
//arr1.splice(3,0); //一个都不删

console.log(arr1);//会影响原数组！！


//用处2：在指定的位置 向数组添加新元素 第三个参数或者更多（不限量）

var arr3 = [1,2,3,4,5,6];
console.log(arr3);

//arr3.splice(1,0,"8888");//找到索引1， 并且不删它，在原索引1之前加8888

//arr3.splice(1,0,"9999");

arr3.splice(3,2,"wsssss","sss","jjj"); //索引3的元素开始删除(包括索引3的元素)两个，并替换成新元素wssss
console.log(arr3);


//练习1：

var arr4 = [1,2,3,2,2,1,3,4,2,5];
//取出数组中重复的数字

for(var i=0 ; i<arr4.length; i++){
 //console.log(arr4[i]);
 for(var a=i+1;a<arr4.length;a++){

         //console.log("----->"+arr4[a]);

         if(arr4[i]==arr4[a]){
         	arr4.splice(a,1);
             a--;//退一位 在比较一下漏网之鱼 

         }
 }
     
   //console.log(arr4[i]);

}console.log(arr4);
