//js

/*this:
1.以函数形式调用时，this永远都是window
2.以方法的形式调用时，this是调用方法的对象 xxx.xxx();
3.以构造函数的形式调用时，this是新创建的那个对象
4.使用call和apply调用时，this是第一个参数（指定的那个对象）


-----------------*/

//测试1：
function Person(name,age){

	this.name= name;
	this.age =age;
}
   
var per = new Person("swk",18);
var per2 = new Person("zbj",28);
var per3 = new Person("shs",30);

Person.prototype.toString= 
	function(){return "Person[name="+this.name+",age="+this.age+"]";}

console.log(per);
console.log(per.toString());

//测试2：
var arr = [per,per2,per3];
//["zbj","shs","tz"],["pusa","nezha"],["yvdi","wangmu"]
console.log(arr);




//测试 3:
for(var i=0; i<arr.length;i++){
	console.log(arr[i]);
}

//forEach 
var arr1 =[1,2]
arr1.forEach(function(a,b,c){
	document.write(a);//元素
    //document.write(b);//索引
	//document.write(c);//元素所在的数组
});




//测试4：
//最后 加 删
arr.push("swk");
console.log(arr);

arr.pop();
console.log(arr);

//最前 加 删
arr.unshift("ddd");
console.log(arr);

arr.shift();
console.log(arr);




//测试5：
var arr3 =[1,2,3,3,4,5,2,2,2,6,7];

for(var i=0; i<arr3.length; i++){

    //console.log(arr3[i]);
    for(var a=i+1;a<arr3.length;a++ ){
      //console.log(arr3[a]);
      if(arr3[i]==arr3[a]){
          arr3.splice(a,1);
          a--;
          }
      }

     
}console.log(arr3);


//测试6--待定

function Swk(){}
Swk.prototype.age =1;
  //age=1
Swk;
console.log(Swk);

function Zbj(age){this.age =age;}
Zbj.prototype.age =1;
//age=undefined
console.log(Zbj);



function Shs(age){if(age){this.age =age;}}
Shs.prototype.age =1;
//age=2
console.log(Shs);








