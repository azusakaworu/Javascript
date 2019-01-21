//js
/*
滚轮事件:
         Chrome: .onmousewheel  (火狐不认)

        火狐:
              1  DOMMouseScroll 
              2  用 addEventListener(); 函数来绑定


滚轮方向（上、下）属性：
             Chrome：  event.wheelDelta;   向上正 向下负
             火狐：    event.detail;       向上负 向下正


取消默认值:
        event.preventDefault();   用addEventListener(); 方法的事件用这个取消默认值
		return false;     取消默认值 滚动条的滚轮行为

*/







var box1= document.getElementById("box1");



/*方式一： box1.onmousewheel做函数名
box1.onmousewheel = function(){
  alert("gunle");
}

box1.addEventListener("DOMMouseScroll",box1.onmousewheel, false); */



/*方式二： 单独写一个函数 */
function fun(event){
	//alert(event.wheelDelta);//chrome 
	//alert(event.detail);//火狐认它  

	if(event.detail >0 ||event.wheelDelta<0){ 
		//向下 变短
		box1.style.height= box1.clientHeight - 10 +"px";
	}else{//向上 变长
		box1.style.height= box1.clientHeight + 10 +"px";} 

        event.preventDefault();//用addEventListener(); 方法的事件用这个取消默认值
		return false;//取消默认值 滚动条的滚轮行为

}

box1.onmousewheel = fun;
box1.addEventListener("DOMMouseScroll",fun , false);