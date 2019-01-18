//js
/*

.clientX   当前可见窗口坐标 
.clientY


pageX  滚动条以后 当前页面的   但是IE8及以下会报错
pageY

滚动条的爸爸是谁？
Chrome认为 scrollTop scrollLeft 是所属body的   --> body.scrollTop 
火狐等浏览器 认为 scrollTop scrollLeft 是所属HTML的    --> documentElement.scrollLeft 

(body容不下 滚动条理应所属HTML 火狐等是对的)
*/


//小练习：div跟随鼠标移动

var box1 = document.getElementById("box1");
document.onmousemove = function(event){
      event = event||window.event;//解决兼容性问题

      // var left = event.pageX;
      // var top = event.pageY;
     
      // box1.style.left = left+"px"; //left属性
      // box1.style.top = top +"px";


//解决兼容性：pageX pageY IE8及以下不兼容
//手动添加下面这些代码，并加到 box1.style.left和top 里
      var left = event.clientX;
      var top = event.clientY;

      //解决火狐和Chrome 的scrollTop  scrollLeft  元素所属父元素不一致 导致的兼容性问题
      var st = document.body.scrollTop||document.documentElement.scrollTop;
      var sl = document.body.scrollLeft||document.documentElement.scrollLeft;
      box1.style.left = left+sl+"px"; //left属性
      box1.style.top = top+st +"px";


	
};