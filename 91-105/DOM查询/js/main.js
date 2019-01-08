//js

/*DOM查询
1.获取元素节点：通过document对象调用 (范围：整个页面中)
              1） document.getElementById();      通过 id属性   获取一个元素节点对象
              2） document.getElementsByTagName();通过 标签名   获取一组元素节点对象
              3） document.getElementsByName();   通过 name属性 获取一组元素节点对象


    innerHTML --> 获取元素内部的内容 单个tag不能用 比如input





2.获取元素节点的子节点（后代节点）：通过具体的元素节点调用（范围小）

  方法： getElementsByTagName();  返回当前节点的指定标签名后代节点

  属性：    1) childNodes    表示当前节点的  所有    子节点
            2) firstChild   表示当前节点的  第一个   子节点
            3) lastChild    表示当前节点的  最后一个 子节点




3.获取父节点和兄弟节点：通过具体的节点调用

    属性：  1）parentNode         表示当前节点的  父节点
           2）previousSibling    表示当前节点的   前一个兄弟节点
           3）nextSibling        表示当前节点的   后一个兄弟节点

--------*/







/*定义一个function，专门用来指定元素绑定单击响应函数*/
function myClick(idStr,fun){
	var btn = document.getElementById(idStr);
	btn.onclick = fun;
}



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
var btn04 = document.getElementById("btn04");
btn04.onclick = function(){
	var city = document.getElementById("city"); 
	var lis = city.getElementsByTagName("li");
	//alert(lis);
	for(var i=0; i<lis.length;i++){
		alert(lis[i].innerHTML);
	}
}





// 返回#city的所有子节点
var btn05 = document.getElementById("btn05");
btn05.onclick = function(){
	var city= document.getElementById("city"); 
	// var cns = city.childNodes;
	// alert(cns.length); //9 空白text节点也算上了

	var cns2 = city.children; //children 属性可以获取当前元素的所有子元素（不包括空白）
	//alert(cns2.length);//4 不算空白
	for(var i=0; i<cns2.length;i++ )
        alert(cns2[i].innerHTML);
}



// 返回#phone的第一个子节点
var btn06 = document.getElementById("btn06");
btn06.onclick = function(){
	var phone = document.getElementById("phone");
	// var pc =phone.childNodes[0];
	// alert(pc.innerHTML);
	var pf = phone.firstChild; //包括文本节点 HTML不能有空格才能获取element
	    //pf = phone.lastChild;
	    //pf = phone.firstElementChild;//不包括文本节点 获取的是元素 HTML有没有空行都无所谓 但兼容性差点
	alert(pf.innerHTML);
}




// 返回#bj的父节点
myClick("btn07",function(){
	var bj = document.getElementById("bj");
	var bjp =bj.parentNode;
	//alert(bjp.innerHTML);
	alert(bjp.innerText);//去掉tag

});

// 返回#android的前一个兄弟节点
myClick("btn08",function(){
    var android = document.getElementById("android");
    
    //alert(android.previousSibling.innerHTML);
    alert(android.previousElementSibling.innerHTML); //直接获取元素 不算HTML空格
});


// 读取#username的value属性值
myClick("btn09",function(){
    var uerN = document.getElementById("username");
    alert(uerN.value);
});


// 设置#username的value属性值
myClick("btn10",function(){
    var uerN = document.getElementById("username");
    uerN.value = "hi azusa";
});

// 返回#bj的文本值
myClick("btn11",function(){
   var bj = document.getElementById("bj");
   alert(bj.innerHTML);
   //alert(bj.innerText);
   //alert(bj.lastChild.nodeValue); //北京元素节点和文本是父子关系 li bj 是第一个元素也最后一个元素
   //alert(bj.firstChild.nodeValue);
});
