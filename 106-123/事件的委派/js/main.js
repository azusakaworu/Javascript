//js

/*事件的委派

为这些元素的共同 祖先元素(父元素）绑定事件 
后代元素不用一一绑定 后代元素触发时 会一直冒泡到祖先元素

利用冒泡 --> 减少事件绑定的次数

事件对象（万事通）
祖先元素的 event.target 代替this 

-------------*/

//为每一个超链接绑定一个单机响应函数
var btn01 = document.getElementById("btn01");
var u00 = document.getElementById("u00");
var allA = document.getElementsByTagName("a");//获取所有的a


// for(var i=0; i<allA.length; i++){
// 	//元素遍历只能给已有的超链接添加事件 不好使 新的没有事件绑定
// 	console.log(allA[i]);
// 	allA[i].onclick = function(){
// 		alert(this.innerHTML);
// 	};
// 	   /*  
//        for 循环会在页面加载完成之后立即执行，
//        而响应函数会在超链接被点击时才执行.

//        当响应函数执行时，for循环早已循环完毕

//        所以在for里的响应函数的this 是不能用allA[i] 代替的
//    */

// }


btn01.onclick = function(){
	var li = document.createElement("li");
	li.innerHTML = "<a href='javascript:;'class='link0'>link</a>";
	u00.appendChild(li);
}



//想只绑一次事件，即使后添加元素也生效？ 利用冒泡 做事件委派
u00.onclick = function(event){
	//alert(this);//this 这里没用
      //alert(event.target); //event.target 表示触发事件的对象 
                             //让事件值只点击link才会被触发
 if(event.target.className == "link0"){//读取class属性时 用className 代替
                                       //有个小隐患： class可以同时标记多个 多个以后就无效了 之后教正则表达式来处理这个问题

 	alert(event.target.innerHTML);//触发事件的对象 的innerHTML
 }
}
