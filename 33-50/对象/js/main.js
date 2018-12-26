//js

/*object ------引用数据类型----------------------*/

//在对象中可以保存多个不同数据类型的属性（塑料袋，把变量装一起）

/*

1.內建object： Math String Number Boolean Function Object......
2.宿主object ： BOM DOM	 console.log  document.write
3.自定义object(最难)

*/




//自定义对象
//写法一：
var obj = new Object();

    obj.name = "dangdang";// 对象.属性名 = 属性值;
    obj.age  = 23;
    obj.gender = "female";


console.log("age = " +obj.age);//获取obj中的属性-->   对象.属性名 

    obj.name = "Ling"; //修改就是 再赋值一遍

    delete obj.gender; // 删除obj中的属性 --> delete 对象.属性名;
    console.log(obj.gender);//已经删除 --> undefined

console.log(obj);



//写法二：
    obj["123"] = 789;
    console.log(obj["123"]); //特殊符号用--> 对象["属性名"]=属性值;
                             //[]可以直接传递变量， 更灵活 可变。

    obj["nihao"] = "你好";
    var n ="nihao";
    console.log(obj[n]);

    // obj["niyehao"] = "你也好";
    // var n =obj["niyehao"];
    // console.log(n);

  //属性值可以是任意数据类型 甚至是object
    obj.test =true;
    obj.test =123;
    obj.test =null;
    obj.test =undefined;

    var obj2 = new Object();
        obj2.name ="zbj";
    //将obj2设置为obj的属性
    obj.test =obj2; //值是一个对象 ， 塑料袋里套塑料袋

    obj.sayH = function(){document.write("属性值也可以是function");};
    obj.sayH();

    console.log(obj);
    console.log(obj.test.name); //在塑料袋里的塑料袋里找name属性

    console.log("test2" in obj); //检查是否有这个属性-->  "属性名" in 对象
    console.log("test" in obj); //true 含有                          




//基本和引用数据类型的区别：
var a = 123;
var b = a;
    a++;
console.log("a = " + a); //124
console.log("b = " + b); //123  ab完全独立的，互不影响


var obj3 = new Object(); //一个new Object(); 代表开辟了一个新的空间
    obj3.a ="123";
var obj4 = obj3;
    obj3.a= "456"; //修改obj3.a属性

    obj4.a ="789";
console.log(obj3.a);//456 --> 789
console.log(obj4.a);//456 --> 789
                    //如果两个变量保存的是同一个对象引用，其中一个变量修改属性时，另一个也会受影响

    obj3 = null; //obj3断开连接 obj4不受影响
console.log(obj3);//obj3 和 obj4 是存在同一个地址，同一个空间，
console.log(obj4);


//基本数据类型做比较
var c = 10, d = 10;
console.log(c == d); // ture 只比较值

//引用数据类型做比较
var obj5 = new Object();
    obj5.name = "LD";
var obj6 = new Object();
    obj6.name = "LD";

console.log(obj5);
console.log(obj6);

console.log(obj5.name == obj6.name); //true --> 跳过object地址--> 比较属性
console.log(obj5== obj6); // false --> 比较object 比较地址 不看里面的东西


//基本数据类型保存的是值，引用数据类型保存的是引用(储存地址)




//写法三：对象字面量 (省事，推荐)
var obj7 = {
      name: "ld",
      age: 23,
      test3:{name:"test"}, //属性值可以是任意数据类型 甚至是object
      home: "huhhot" ,//最后一个属性后面别加逗号
      sayH1:function(){document.write("<br>");document.write("我是对象字面量写法里属性值为function的例子");}
}
obj7.sayH1();
console.log(obj7);


//枚举对象中的属性  for in -->有几个属性，循环体就执行几次

for (var meijv in obj7){
    console.log(meijv +":"+ obj7[meijv]);//[]可以直接传递变量， 更灵活 可变。

    
    // console.log(meijv); //属性名
    // console.log(obj7[meijv]); //属性值
}
