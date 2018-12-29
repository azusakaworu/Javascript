//js

/*原型：prototype----------------------
原型对象相当于一个公共区域，所有同一个类的实例都可以访问到
创建构造函数时，我们可以将对象中共有的内容，统一设置到prototype里。


*/
function MyClass(){

}
MyClass.prototype.a = 123;
MyClass.prototype.sayHello = function(){
	document.write("hello");
}//不会污染到全局作用域


var mc = new MyClass();
var mc2 = new MyClass();

console.log(mc);

//mc.a="我是mc里的a";
console.log(mc.a);//mc 里没有a 才会去找prototype里的a属性的值，不想用原型就自己写一个盖住
mc.sayHello();
mc2.sayHello();

console.log(mc2.__proto__ == MyClass.prototype);//true


console.log("a" in mc);//检查是否有这个属性 原型里有 实例里没有 也返回 true
console.log("a" in mc2);

console.log(mc.hasOwnProperty("a"));//检查自身属性 有-->ture
console.log(mc.hasOwnProperty("hasOwnProperty"));
console.log(mc.__proto__.hasOwnProperty("hasOwnProperty"));
console.log(mc.__proto__.__proto__.hasOwnProperty("hasOwnProperty")); //true

console.log(mc.__proto__.__proto__.__proto__);//直到找到object祖先 -->null 原型的原型没有原型 
//hasOwnProperty在原型的原型里


/*
原型对象也是对象，它也有原型对象。
自身没有去原型，原型没有去原型的原型中寻找,如果都找不见 返回 undefined


*/

console.log(mc.hello);//undefined