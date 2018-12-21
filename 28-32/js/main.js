//javascript

/*
流程控制：条件判断语句 --> if语句
         条件分支语句
         循环语句

if语句执行前，会先对 条件表达式进行求值判断
ture --> 执行if后的语句
false --> 不执行

if只管紧随其后的语句--> {分组}

为了好看，单条语句也加{...}

{..}后没有; semicolon

*/



//语句一： if(条件表达式){语句...}
var a = 10;

     //两个条件同时满足 用 && 
     //if(a> 10 && a<30){alert("a大于10 且小于30");}


    if(a<30){console.log("look at me");
             document.write("look at me!");}





//语句二： if(条件表达式){语句...}else{语句....}
var age = 58;
    if(age >= 60){console.log("You retired ");} //true --> 执行if后的语句
    else{console.log("still working");} //false --> 执行else后的语句

if(2==1){document.write("oppps");}else{document.write("hahaha");}

          


//语句三： if(条件表达式){语句...}else if(条件表达式){语句....}else{语句....}
 //只要有一个执行，后面就不看了

 var age1 = 30;
     if(age1 > 100){document.write("live too long");}
     else if(age1 > 60){document.write("elder man");}
     else if(age1 > 30){document.write("got a baby");}
     else if (age1 > 20){document.write("become adult");}
     else{document.write("you are children");}


      var age2 = 70;
     if(age2 > 17){document.write("adult");}

/*--------------死代码---------------------*/
     else if(age2 > 30){document.write("elder");}
     else if(age2 > 60){document.write("elder man");}
     else {document.write("live too long");}



/*---------避免死代码：完善条件--------------*/

      var age3 = 70;
     if(age3 > 17 && age3< 30){document.write("adult");}
     else if(age3 > 30 && age3< 60){document.write("elder");}
     else if(age3 > 60 && age3< 100){document.write("elder man");}
     else {document.write("live too long");}
     //麻烦 还是age1的方便  
     //或者：

   var age4 = 70;
     if(age4 < 17 ){document.write("adult");}
     else if(age4 < 30){document.write("elder");}
     else if(age4 < 60){document.write("elder man");}
     else {document.write("live so long");}




//练习1
/*
var finalGrade = prompt("enter the score please（1-100）");
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
*/

//注意 = 是赋值 == 是相等

//练习2

/*
var height = prompt("enter your height"), 
    money = prompt("what your salary"), 
    face = prompt("how you look like");
if(height > 180 && money > 1000 && face > 500){
	console.log("great!");
}else if(height > 180 || money > 1000 || face > 500){
	console.log("good");
}else{console.log("say good bye?");}
*/




//练习3 排序
var num1 = +prompt("enter frist numeber"); //prompt 返回值是string
var num2 = +prompt("enter sencond numeber");//非number类型加正号自动转Number
var num3 = +prompt("enter third numeber");
//找三个数里最小的
//num1 最小
if(num1<num2 && num1<num3){
	//num1 最小 比较num2和num3
	if(num2<num3){
		console.log(num1 + "," +num2 + "," + num3);
	}else {console.log(num1 + "," +num3 + "," + num2);}
	}
	//num2 第二小
else if (num2<num1 && num2<num3){
	//比较 num1和num3
       if (num1<num3){
       	console.log(num2 + "," +num1 + "," + num3);
       }else{console.log(num2 + "," +num3 + "," + num1);}
}//num 3 最小
else{
      if(num1<num2){
      	console.log(num3 + "," +num1 + "," + num2);
      }else{console.log(num3 + "," +num2 + "," + num1);}
	}
