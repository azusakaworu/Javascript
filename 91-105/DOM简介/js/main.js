//js

/*DOM简介 

宿主对象：DOM BOM 

DOM: Document Object Model （文档对象模型）
     作用： 通过JS操作网页
     D：一个网页就是一个文档document
     O：网页里面所有东西每一个节点都是转换为一个对象
                             --> 一切都是对象
                             --> 方便搞对象
     M：整合对象 表示对象之间的关系 


节点：Node 网页中最基本组成部分，网页中每一部分都是节点

  节点类型：（四种对象）
    1.文档节点：整个html(文档）页面
    2.元素节点：<p id="te">text</p>  元素就是标签

    3.属性节点：id="te"
    4.文本节点：text


--------*/
//文档节点：浏览器已经提供了文档节点（对象）document ，document是window对象的属性
//document.write();
console.log(document);//document 就是整个网页


//获取button对象（元素节点）
var btn = document.getElementById("btn");
console.log(btn);

//修改按钮文字
console.log(btn.innerHTML);
btn.innerHTML = "this is abutton";
console.log(btn.innerHTML);