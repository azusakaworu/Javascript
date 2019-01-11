//js

/*DOM增删改-----

appendChild(); 向父节点中添加一个新的子节点
removeChild();
replaceChild();
insertBefore();   两个参数 （新儿子，旧儿子） 新会被放在旧前面
createElement();  标签名字符串作为参数，根据标签名创建元素节点对象
createTextNode(); 文本内容作为参数

---*/



function myClick(idStr,fun){
	var btn = document.getElementById(idStr);
	btn.onclick = fun;
}

var city = document.getElementById("city");

var bj = document.getElementById("bj");


// 创建一个"广州"节点,添加到#city下
myClick("btn01",function(){
         // var city = document.getElementById("city");
         var li = document.createElement("li");
         //console.log(li);
         var gzText = document.createTextNode("广州");
         //console.log(gzText);
         li.appendChild(gzText);
         //console.log(li); //认亲 把gzText 添加到某个父节点
         city.appendChild(li); //认亲 city是li的爸
         //console.log(li); 

});


// 将"广州"节点插入到#bj前面
myClick("btn02", function(){

	 var li = document.createElement("li");
     var gzText = document.createTextNode("广州");
     li.appendChild(gzText);

      city.insertBefore(li,bj); //li 和bj 都是儿子， 找爸city


});


// 使用"广州"节点替换#bj节点
myClick("btn03",function(){
	var li = document.createElement("li");
     var gzText = document.createTextNode("广州");
     li.appendChild(gzText);

     city.replaceChild(li,bj);

});



// 删除#bj节点
myClick("btn04",function(){
      //city.removeChild(bj); //父弑儿子

      //如果不想找生父是谁，可以用parentNode 代替
      bj.parentNode.removeChild(bj);  //推荐 方便 儿子自己干掉自己
});


// 读取#city内的HTML代码
myClick("btn05",function(){
      console.log(city.innerHTML);
});


// 设置#bj内的HTML代码
myClick("btn06",function(){
	bj.innerHTML = "昌平";
});


//用innerHTML 创建一个"广州"节点,添加到#city下
myClick("btn07",function(){
     city.innerHTML += "<li>呼和浩特</li>";
     //先全删 后都加 动静太大 会影响其他元素之前绑定的函数
     //所以要两者结合：
});


//使用两种方法相结合 创建一个"南阳"节点,添加到#city下，更方便 推荐
myClick("btn08",function(){

    var li = document.createElement("li");
    li.innerHTML = "南阳"; //其实就节省了一步
    city.appendChild(li);
});