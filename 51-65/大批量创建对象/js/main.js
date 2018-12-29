//js

/*使用工厂方式创建对象----------------------
使用工厂方法创建的对象，使用的构造函数都是object
所以创建的对象都是object这个类型 -->无法区分出多种不同类型的对象




*/


// var obj ={
// 	name:"ling",
// 	age:23,
// 	gender:"female",
// 	sayName:function(){console.log(this.name);}
// }


function createPerson(name,age,gender){
	//创建一个新的对象
	var obj = new Object();
    //向对象中添加属性
	obj.name= name;
	obj.age =age;
	obj.gender = gender;
	obj.sayName = function(){console.log(this.name);};
    //讲新的对象返回
	return obj;
}

var obj2 = createPerson("ling",23,"nv");
var obj3 = createPerson("mike",35,"nan");
var obj4 = createPerson("dang",24,"nv");

obj2.sayName();
obj3.sayName();
obj4.sayName();

//创建狗的对象
function createDog(name,age){
	var obj = new Object();

	obj.name=name;
	obj.age=age;
	obj.sayDog = function(){console.log(this.age);};

	return obj;
}

var dog = createDog("wangcai",3);

dog.sayDog();

console.log(dog);
console.log(obj4);