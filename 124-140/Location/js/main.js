//js



/*BOM:Location 对象： 封装地址栏信息

location 改路劲 会跳转页面 并生产相应的历史记录

方法： location.assign(); 跳转页面 作用和直接修改location一样
       location.reload(); 刷新
       location.replace(); 跳转页面 但没有历史记录 回退不了


------------*/

console.log(location);

var btn = document.getElementById("btn");
btn.onclick = function(){
	//alert(location);//当前页面的完整路径

//location = "https://www.bilibili.com/"; //像一个超链接 这是完整路径
//location = "history.html";//也可以是相对路径

//location.assign("https://www.bilibili.com/");

 //location.reload();
 location.replace("https://www.bilibili.com/"); 
}