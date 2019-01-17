//js

/*DOM增删改练习之a的索引问题*/



//点击一个超链接以后，删除一个员工的信息
var allA = document.getElementsByTagName("a");

for(var i = 0; i<allA.length;i++){

   /*  
       for 循环会在页面加载完成之后立即执行，
       而响应函数会在超链接被点击时才执行.

       当响应函数执行时，for循环早已循环完毕

       所以在for里的响应函数的this 是不能用allA[i] 代替的
   */

     console.log("我是for循环的索引"+i);  //索引是 0 1 2  
	allA[i].onclick = function(){
		var tr = this.parentNode.parentNode;//a 的爷爷
    console.log(allA[i] == this); //flase

     console.log("我是响应函数里的索引"+i); //索引永远是3
        //alert(allA[i]); //undefined
       
        var name = tr.children[0].innerHTML;
		//var trName = tr.getElementsByTagName("td")[0].innerHTML;
		            //也可以 tr.children[0]
		var flag = confirm("are you sure to delete "+name+"?");

		if(flag){
			tr.parentNode.removeChild(tr);
		}
		
		return false;
	};
	
};







