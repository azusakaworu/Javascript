//js

/*
while(条件表达式){语句....}

do{语句...} while(条件表达式) 
*/


/*
var n = 1;
while(true){
	alert(n++);  //死循环千万别写document.write！！

	//加break 来终止循环
	if(n == 10){break;}
}
*/

var i = 0; //初始表达式
while(i<10) //条件表达式
{
	//alert(i); //循环体
    document.write(i + "<br /> ");
	i++; //更新表达式
}


//do...while...
//先执行后判断 保证循环体至少执行一次
var d = 0;
do{document.write(d++ + "<br />");}while(d < 20);

//练习1
var money = 1000;
var count = 0; //计数器
while(money <= 5000){
	money = money * 1.05; //money *= i.05
	count++; 
}
console.log("tottly " + count + "years");


//练习2

while(true){
	var finalGrade = prompt("enter the score please（1-100）");
    if(finalGrade >= 0 && finalGrade<=100){
    	break;} //输对了退出

    alert("enter again"); //没输对显示这个
}
//判断输入值是否合法
if(finalGrade >100 || finalGrade <0 || isNaN(finalGrade)){
	alert("get out!");
}else{
 if(finalGrade == 100){console.log("BMW");}
    //&& finalGrade< 100 不需要了  && finalGrade<= 80 
    else if(finalGrade >=80 ){console.log("iphone15s");}
    else if(finalGrade >=60 ){console.log("a text book");}
    else{console.log("nothing");}

}