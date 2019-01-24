//js
//练习：自动切换图片

/*
clearInterval();  可以接受任意值的参数
无效参数：什么也不做 不报错

开启定时器之前，需要将当前元素上的其他定时器关闭

*/


var img1 = document.getElementById("img1");
//创建数组来保存图片路劲
var imgArr = [
        "images/maxiu.jpg",
        "images/yao.jpg",
        "images/奥特曼.png",
        "images/水仙.png",
        "images/火影壁纸1.jpg",
        "images/王八.png"
];

var index = 0;
//开启一个定时器

var timer;//全局定义

var btn01 = document.getElementById("btn01");
btn01.onclick = function (){
	clearInterval(timer);//开一个关一个 防止误触多次点击start按钮 开启多个定时器
	var fun = function(){
	index++;
	//if(index>=imgArr.length){index=0;}//这么写
	//index=index%imgArr.length;//也可以这么写
	index %= imgArr.length;//或者这么写
	//修改img1 的src
	img1.src = imgArr[index];
};
  timer =setInterval(fun,1000);

}

var btn02 = document.getElementById("btn02");
btn02.onclick=function(){
 clearInterval(timer);
}