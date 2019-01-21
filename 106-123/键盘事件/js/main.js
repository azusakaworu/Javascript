//js

/*键盘事件

1.绑定给一些可以获取到焦点的对象： 表单项（input）
2.绑定给document
                 

onkeydown
onkeyup

属性： keyCode （获取按键Unicode编码

  是否被按下：
             altKey
             ctrlKey
             shiftKey 

-----------*/


//随便按哪个都会触发事件
//document.onkeydown = function(){console.log("按键被按下了！！")};//一直按一直触发 前两次会卡-->防止误触
//document.onkeyup = function(){console.log("按键被按下了！！")};//不会连续触发


//想知道按下的是谁？ 问万事通 事件对象
document.onkeydown = function(e){
   console.log(e.keyCode);
   if(e.keyCode === 56){//8 的Unicode编码是56
   	alert("数字8被按下了0-0！");
   }

//y和ctrl是否同时被按下
if(e.keyCode===65 && e.ctrlKey){
	console.log("ctrl + a ");
}
 
};


var input = document.getElementsByTagName('input')[0];
input.onkeydown = function(e){
	console.log("按下了---");
	//return false;//取消默认行为 (文本框可以输入text)

//文本框里不能输入数字
if(e.keyCode >=48 && e.keyCode<=57){
	return false;//取消默认行为
}
};