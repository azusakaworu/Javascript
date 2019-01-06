//js

/*DOM查询
1.获取元素节点：通过document对象调用
              1） document.getElementById();      通过 id属性   获取一个元素节点对象
              2） document.getElementsByTagName();通过 标签名   获取一组元素节点对象
              3） document.getElementsByName();   通过 name属性 获取一组元素节点对象


innerHTML --> 获取元素内部的内容 单个tag不能用 比如input
--------*/






// 查找#bj节点
var btn01=document.getElementById("btn01");
btn01.onclick=function(){
	var bjin = document.getElementById("bj");
	alert(bjin.innerHTML);

};







// 查找所有li节点
var btn02=document.getElementById("btn02");
btn02.onclick =function(){
	var lis = document.getElementsByTagName("li");//返回类数组对象,
	                                              //即使是一个元素也会封装进一个数组中
	//alert(lis);
    //console.log(lis);

	for(var i = 0; i<lis.length; i++){
            alert(lis[i].innerHTML);
	}
};






// 查找name=gender的所有节点
var btn03 = document.getElementById("btn03");
btn03.onclick = function(){
	var inputs = document.getElementsByName("gender");

	//alert(inputs.length);
	//遍历数组
	for(var i = 0; i<inputs.length; i++){
		//alert(inputs[i].value);
		alert(inputs[i].name);
		//alert(inputs[i].className); //class属性不能直接写class 要写className
	}
};







// 查找#city下所有li节点

// 返回#city的所有子节点
// 返回#phone的第一个子节点
// 返回#bj的父节点
// 返回#android的前一个兄弟节点

// 读取#username的value属性值
// 设置#username的value属性值
// 返回#bj的文本值
