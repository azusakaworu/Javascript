//js

/*this----------------------

解析器在调用函数时，每次都会向函数内部传递进一个隐藏的参数--> this
悄悄的，看不见。
this 指向一个对象-->上下文对象

根据调用方式不同，this会指向不同的对象：
1.以函数的形式-->  fun();  调用时，this永远都指向window
2.以方法的形式调用，--> obj.sayName();   this就是调用方法的对象：obj
3.以构造函数形式调用时， this就是新创建的对象（实例）



*/
function fun (a,b){
	console.log(this.name); //指向全局对象window
}
//fun(123,456);

//创建一个对象
var obj = {
	name:"swk",
	sayName:fun
}

var obj2 = {
	name:"shs",
	sayName:fun
}
//console.log(obj.sayName == fun); //ture

var name ="quanjv name"; //在window对象里添加name属性

obj.sayName();//和fun();一个东西   this是obj
fun();//this 是window
obj2.sayName(); //this 是obj2




//练习1:

var anime = "naruto";
function ani (){
	console.log(this.anime);
}

var obj3 = {
	anime:"hunterxhunter",
	sayAni:ani
}
var obj4 = {
	anime:"hetaliya",
	sayAni:ani
}

ani(); //window.anime
obj3.sayAni(); //obj3.anime
obj4.sayAni(); //obj4.anime