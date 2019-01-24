//js

/*定时器的应用

-------*/
var box1=document.getElementById("box1");
var btn01 = document.getElementById("btn01");
var btn02 = document.getElementById("btn02");
var btn03 = document.getElementById("btn03");
var btn04 = document.getElementById("btn04");

function getStyle(obj,name){

	if(window.getComputedStyle){
		return getComputedStyle(obj, null)[name];
	}//else{return obj.currentStyle[name];}//ie8 默认值auto 加上left=0px;
	
}

//var timer;//全局声明
//定时器标识 由全局变量timer保存 所有正在执行的定时器都在这个变量中保存-->乱套



/*尝试创建一个函数-----给btn01 02 相同的部分-------------------

参数：1. obj  执行动画的对象 -->box1

      2. speed 向右 正数  向左负数
      3. target 标准线 到哪为止： 向左<0   向右>=800

      4.attr 要执行动画的样式:比如left top width height
      5.callback 回调函数 在动画执行完以后执行


*/

function move(obj,attr,target,speed,callback){

clearInterval(obj.timer);//没赋值也不报错

var current = parseInt(getStyle(obj,attr));//获取元素目前位置
if(current>target){speed== -speed;}//判断速度正负值

    obj.timer = setInterval(function(){
   //obj.timer 向执行动画的对象添加一个属性timer ，保存自己的定时器标识。会是各是各的定时器
      var oldValue = parseInt(getStyle(obj,attr));//parseInt 取出字符串里的合法数字 方便计算
        //alert(oldValue);
           var newValue = oldValue +speed;
           if(speed <0 && newValue<target || speed>0 && newValue>target){
            newValue=target;
           }
           obj.style[attr]= newValue+ "px";
        
          if(newValue ==target){
            clearInterval(obj.timer);
            callback && callback();//有就执行 没有就不执行
          }
           
  
   },30);
}

btn01.onclick = function(){
	// var left = box1.offsetLeft;
	// var top = box1.offsetTop;

	// box1.style.left = left+10+"px";
	// box1.style.top = top+10+"px";
move(box1,"left",800,10);
	


};



btn02.onclick = function(){
 
move(box1,"left",0,-10);
  // clearInterval(timer);//没赋值也不报错
  //   timer = setInterval(function(){

  //     var oldValue = parseInt(getStyle(box1,"left"));//parseInt 取出字符串里的合法数字 方便计算
  //       //alert(oldValue);
  //          var newValue = oldValue -10;
  //          if(newValue<0){
  //           newValue=0;
  //          }
  //          box1.style.left = newValue+ "px";
        
  //         if(newValue == 800){
  //           clearInterval(timer);
  //         }
           
  
  //  },30);


};


btn03.onclick=function(){
  move(box2,"left",800,20);
};


btn04.onclick=function(){
  //move(box2,"width",800,20);
  //move(box2,"top",800,20);
  //move(box2,"height",800,20);
  move(box2,"width",800,10,function(){
    move(box2,"height",400,10,function(){
      move(box2,"top",0,10,function(){
        move(box2,"width",100,10,function(){});
      });
    });
    //alert("donghwan");
  });
};