//js

/*return break continue 区别-----------------*/

function fun(){
	alert("函数要执行了~~~");

	for(var i=0; i<5;i++){
		

		if(i == 2){

		     //break;// break 只退出当前循环(结束循环) --> 01 
             //continue; //跳过当前 --> 0134
             return;  //return 一执行 此函数return后面语句都不看了(结束函数) --> 01 并且无后面的alert
		     } 

		console.log(i);
	}

    alert("函数执行完了~~~");
}

//fun();   //不调用 函数就不生效


/*return 返回值 类型----（可以是任意数据类型）--------------------------*/
function fun1 (){
	//return 10;
	//return "hello dangdang";
    //return true;
    //return null;
    //return undefined;

    return {name:"dangdang desu",age :23};  //返回值类型：object

    // var obj = {name:"dangdang desu"};
    // return obj;


}
var a = fun1();
console.log("a = "+a);
console.log("a = "+a.name);
console.log("a = "+a.age);


function fun2(){
	//在函数内部再声明一个函数，function套function （不限量）
	function fun3(){
		alert("我是fun3");
	}

    //return fun3(); //fun3没有返回值 b--> undefiend
	return fun3; //返回值类型也可以是function
}

var b = fun2();
//console.log("b = " +b); //输出fun3的整个函数
//b();
fun2()(); //相当于b(); 省去var b = fun2();