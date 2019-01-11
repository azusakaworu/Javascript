//js

/*全选练习--------*/

//全选按钮：点击按钮以后 四个多选框全都被选中
//#checkedAllBtn
var items = document.getElementsByName("items");

var checkedAllBox = document.getElementById("checkedAllBox");





var checkedAllBtn = document.getElementById("checkedAllBtn");







checkedAllBtn.onclick = function(){
	

	//alert(items.length);
	for(var i=0; i<items.length;i++){
		
			items[i].checked = true;
	}

	checkedAllBox.checked=true;
};


//全不选
//#checkedNoBtn
var checkedNoBtn = document.getElementById("checkedNoBtn");
checkedNoBtn.onclick = function(){
	for(var i=0; i<items.length;i++){
	items[i].checked = false;}

	checkedAllBox.checked=false;
};



//反选：单击按钮以后，选中的变没选中，没选中的变选中
//#checkedRevBtn
var checkedRevBtn = document.getElementById("checkedRevBtn");
checkedRevBtn.onclick = function(){
	checkedAllBox.checked=true;
	for(var i = 0; i<items.length; i++){
		//判断多选框状态
		// if(items[i].checked){
		// 	items[i].checked = false; }else{
		// 		items[i].checked = true;}

		items[i].checked = !items[i].checked; 


			//只要有一个没选中 则就不是全选
			if(!items[i].checked){ 
                 checkedAllBox.checked=false;
                 
             }
		}

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

checkedAllBox.onclick=function(){

	//alert(this ===checkedAllBox);
	for(var i=0; i<items.length;i++){
		
		items[i].checked = this.checked;

	}

};



// 当点击 全选   按钮时 全选/全不选--打钩  checkedAllBox


// 当点击 全不选 按钮时 全选/全不选 --取消

// 当给所有item勾选上以后 全选/全不选 选中，
// 点击反选以后 全选/全不选 又取消


//为四个多选框分别绑定点击响应函数
for(var i = 0;i<items.length;i++){
	items[i].onclick = function(){
          checkedAllBox.checked=true;

		//判断四个多选框是否全选
		for(var j=0; j<items.length;j++){
			//只要有一个没选中 则就不是全选 ,参考质数练习
			if(!items[j].checked){ 
                 checkedAllBox.checked=false;
                 break; //一旦进入循环就不用循环了 提升性能
             }
		}
	};
}