//js
/*BOM：Navigator

BOM : 浏览器对象模型 --> 通过JS来操作浏览器

BOM对象：
           Window  ： 浏览器窗口 && 网页中全局对象 

           Navigator ：网景公司遗留的 浏览器 （代表当前浏览器的信息）--> 识别不同的浏览器
           Location  ： 代表当前浏览器的 地址栏 信息（URL）通过它可以跳转页面
           History   ： 代表浏览器的历史记录 （由于隐私原因 该对象不能获取具体的历史记录）
                        只能操作浏览器 向前 后退 翻页）改操作只在当次访问时有效--> 浏览器关闭后再打开没了

           Screen (用的不多)： 可以获得用户屏幕（显示器）信息 PC端用的不多 主要是移动端
         
这些BOM对象 1.都是作为window对象的属性保存的
           2.都是全局对象（可以直接使用）




-----------*/

//window.alert("hahah");
//console.log(window);


//console.log(window.navigator);//window 可省略不写


console.log(navigator.userAgent);//是一段字符串
//Chrome: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36"
//火狐：Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0
//IE11: Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; McAfee; rv:11.0) like Gecko
console.log(navigator.appCodeName);
console.log(navigator.appName);

var ua = navigator.userAgent;
if(/Firefox/i.test(ua)){alert("你是火狐！！");}
else if(/Chrome/i.test(ua)){alert("你是chrome！！");}
// else if(/msie/i.test(ua)){alert("你是IE 5678910！！");}
// else if("ActiveXObject" in window){alert("这孙子是IE11");} IE11又进化了 识别不了