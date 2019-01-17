//js 样式属性垂直滚动小练习


//当垂直滚动条滚到底的时候，是表单项可用

var inputs = document.getElementsByTagName("input");
var info = document.getElementById("info");

  info.onscroll = function(){

	if(this.scrollHeight - this.scrollTop == this.clientHeight){//info 可以用this代替

		// console.log("我滚到底了");
		inputs[0].disabled = false; //false 取消不可用 语法： checkboxObject.disabled = false|true;
		inputs[1].disabled = false;
	}
};

inputs[1].onclick = function(){
     alert("已提交");
};