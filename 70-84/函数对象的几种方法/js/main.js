//js

/*函数对象的方法；

call();  实参在第一个参数（对象）之后依次传递

apply();  需要将实参封装在一个数组中传递

共同点：两者可以将一根对象指定为第一个参数 可修改this
指定this。此时这个对象将会成为函数执行时的this




----------------------*/


/*this:
1.以函数形式调用时，this永远都是window
2.以方法的形式调用时，this是调用方法的对象 xxx.xxx();
3.以构造函数的形式调用时，this是新创建的那个对象
4.使用call和apply调用时，this是第一个参数（指定的那个对象）


-----------------*/

function fun(){
   alert(this.name);
}

var obj ={name:"obj",
          sayName:function(){alert(this.name);}
      };
var obj2 ={name:"obj2"};

//这三种都能调用函数
// fun(); //函数调用 this 是window

// fun.call(obj); 
// fun.apply(obj2);  //call(); apply(); this是第一个参数

//obj.sayName.apply(obj2); //--> "obj2"


//有参数
function fun2(a,b){
	console.log("a="+a);
	console.log("b="+b);
}
//fun2.call(obj);//undefiend
fun2.call(obj,2,3); //实参在第一个参数（对象）之后依次传递
fun2.apply(obj,[2,3]);//apply()需要将实参封装在一个数组中传递