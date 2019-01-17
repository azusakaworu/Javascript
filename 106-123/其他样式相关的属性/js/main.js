//js

/*其他样式相关属性


这些属性的返回值不带px 可以直接计算：

.clientHeight  元素的可见高度 ： height + padding 
.clientWidth            宽度  : width + padding 

.offsetHeight   :height + padding + border
.offsetWidth   :width + padding + border

.offsetParent  获取当前元素定位父元素 （开启定位的 最近的）如果都不开启定位 则返回body element

.offsetLeft  当前元素相对于其定位元素的水平偏移量  body : margin-left --> padding-left
.offsetTop   当前元素相对于其定位元素的垂直偏移量  body: margin-top  --> padding-top

.scrollHeight 溢出以后 滚动区域加上看不见的区域的整个的高度
.scrollWidth                 

.scrollLeft  溢出以后 滚动区域内 滚动条左边的头距离左边的距离(水平)
.scrollTop                     滚动条上边的头距离顶部的距离(垂直)


scrollHeight - scrollTop == clientHeight (说明垂直滚动条 滚到底了) 垂直用的多
scrollWidth - scrollLeft == clientWidth (说明 水平 滚动条 滚到底了)

*/

var box1 = document.getElementById("box1");
var btn01 = document.getElementById("btn01");
   btn01.onclick = function(){
   	//console.log(box1.style.padding); //只能读取内联样式 并带有单位px 只包括width 或只包括padding
       // console.log(box1.clientHeight);
       // console.log(box1.clientWidth); //这些属性的返回值不带px 可以直接计算 可见宽度

       // console.log(box1.offsetHeight); 
       // console.log(box1.offsetWidth);   //border得有颜色才有显示 才会计算加上border以后的宽度高度  

       // var op = box1.offsetParent;//就近原则
       // alert(op.id);

       // console.log(box1.offsetLeft);
       // console.log(box1.offsetTop);

       //console.log(box4.scrollHeight );
       console.log(box4.scrollLeft);
       //console.log(box4.scrollTop);
       console.log(box4.scrollWidth);

alert()
   };
