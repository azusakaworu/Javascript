//js

/*切换图片练习--------*/
//点击按钮，切换图片


var prev = document.getElementById("prev"); 
var next = document.getElementById("next"); //获取两个按钮
//要切换图片就是要修改img标签的src属性
//获取img标签
var img = document.getElementsByTagName("img")[0];//只有一个元素 就写一个[0]直接拿出来
//alert(img);
//创建一个数组 来保存所有图片路径
var imgArr = ["images/maxiu.jpg","images/yao.jpg","images/奥特曼.png","images/水仙.png","images/火影壁纸1.jpg","images/王八.png"];
var index = 0;

var info = document.getElementById("info");//获取id为info的p元素

info.innerHTML="一共"+imgArr.length+"张图片，当前第"+(index+1) +"张"; //刷新后一开始显示



prev.onclick = function(){

	index--;
	if(index<0){index=imgArr.length-1;}
	img.src=imgArr[index];
	info.innerHTML="一共"+imgArr.length+"张图片，当前第"+(index+1) +"张";
};

next.onclick = function(){
	index++;
	if(index>imgArr.length-1){index=0;}
	img.src =imgArr[index];
	info.innerHTML="一共"+imgArr.length+"张图片，当前第"+(index+1) +"张";
};