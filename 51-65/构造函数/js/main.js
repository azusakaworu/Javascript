//js

/*构造函数----------------------

构造函数就是一个普通的函数，创建方式和普通的函数没有区别
不同：1.首字母大写
     2. new

类：Person Dog
实例：per per2   DOG

3.以构造函数形式调用时， this就是新创建的对象（实例）
*/

function Person(name,age,gender){
	this.name=name;
	this.age=age;
	this.gender=gender;

	//this.sayName=function(){alert(this.name);};//向对象中添加一个方法


}

Person.prototype.sayName=function(){alert(this.name);}
//创建实例 构造函数调用（new）
var per = new Person("ling",23,"nv");
var per2 = new Person("dang",24,"nv");


per.sayName();
per2.sayName();


console.log(per);
console.log(per2);

function Dog(){

}
var DOG = new Dog();

console.log(DOG);

console.log(per instanceof Person); //ture 检查per是不是Person类的实例
console.log(per instanceof Object);//鼻祖object 都是true