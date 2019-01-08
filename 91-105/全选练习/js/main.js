//js

/*全选练习--------*/

//全选按钮：点击按钮以后 四个多选框全都被选中
//#checkedAllBtn
var items = document.getElementsByName("items");



var checkedAllBtn = document.getElementById("checkedAllBtn");
checkedAllBtn.onclick = function(){
	

	//alert(items.length);
	for(var i=0; i<items.length;i++){
		
			items[i].checked = true;
	}
};


//全不选
//#checkedNoBtn
var checkedNoBtn = document.getElementById("checkedNoBtn");
checkedNoBtn.onclick = function(){
	for(var i=0; i<items.length;i++){
	items[i].checked = false;}
};



//反选：单击按钮以后，选中的变没选中，没选中的变选中
//#checkedRevBtn
var checkedRevBtn = document.getElementById("checkedRevBtn");
checkedRevBtn.onclick = function(){
	for(var i = 0; i<items.length; i++){
		//判断多选框状态
		// if(items[i].checked){
		// 	items[i].checked = false; }else{
		// 		items[i].checked = true;}

		items[i].checked = !items[i].checked; }
};



//提交按钮：点击按钮以后，将所有选中的对选框 弹出 value属性值
//#sendBtn
var sendBtn = document.getElementById("sendBtn");
sendBtn.onclick = function(){
	for(var i = 0; i<items.length; i++){
		//判断多选框是否选中
		if(items[i].checked){
			alert(items[i].value);
		}
     }
};



//全选、全不选多选框  一建两用 ：选中时，都选中，取消时，都取消（不选中）
//#checkedAllBox
var checkedAllBox = document.getElementById("checkedAllBox");
checkedAllBox.onclick=function(){

	//alert(this ===checkedAllBox);
	for(var i=0; i<items.length;i++){
		
		items[i].checked = this.checked;

	}

};



// 当点击 全选   按钮时 全选/全不选--打钩  
// 当点击 全不选 按钮时 全选/全不选 --取消
// 当给所有item勾选上以后 全选/全不选 选中，
// 点击反选以后 全选/全不选 又取消
