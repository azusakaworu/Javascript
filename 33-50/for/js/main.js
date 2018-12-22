//js

/*
语法：

for (初始化表达式; 条件表达式; 更新表达式){
	循环体;
}

*/

// for(var i = 0; i<5; i++){
// 	alert(i);
// }

//for 的三个表达式都可以省略并写在外部， 都不写只有两个;semicolon就成了死循环 慎用！！（禁止document.write)
// var f = 0;
// for(; f<7;){
// 	alert(f++);
// }


//练习1: 打印说有1-100之间的奇数之和


for (var num = 1, sum = 0; num <= 100; num++){
	if(num %2 != 0)//不能被2整除的数都是奇数
	{
		sum = sum + num;}
}
console.log("sum =" + sum);




//练习2：打印1-100之间所有7的倍数的个数及其总和

var num1 = 1;
var sum1 = 0;
var count = 0;
for(; num1 <= 100 ;num1++){
	if(num1 % 7 == 0){

		sum1 = sum1 +num1;
		count++;
	}
}
console.log("count = " + count);
console.log("sum1 = " + sum1);


//练习3： 水仙花数是指一个3位数，它的每个位上的数字的3次幂之和等于它本身。
//(列如： 1^3 + 5^3 + 3^3 = 153),请打印所有的水仙花数。

for(var shui = 100; shui<= 999;shui++){
	//获取 百 十 个 位数字
	var bai = parseInt(shui / 100);
	var shi = parseInt((shui - bai*100)/10);
	var ge = shui % 10;

	if(bai*bai*bai+ shi*shi*shi+ ge*ge*ge == shui){
		console.log(shui);
	}
}



/*for 的嵌套练习*/

//qian 管高度
for(var qian = 0;qian<5;qian++){
    //tao 管 宽度
	for(var tao = 0; tao<qian+1; tao++){

		document.write("*&nbsp;");
	}

	document.write("<br>");
	
}


document.write("<br>");
//-----------------------------------倒过来
for(var qian1 = 0;qian1<6;qian1++){
    //tao 管 宽度
	for(var tao1 = 0; tao1<6-qian1; tao1++){

		document.write("*&nbsp;");
	}

	document.write("<br>");
	
}

document.write("<br>");
//练习：打印99乘法表
for(var biao = 1 ; biao<=10;biao++){

	for(var bk=1; bk<=biao; bk++){
		document.write("<span>"+bk+"*"+biao+"=" +bk*biao +"</span>");
	}
	document.write("<br>");
}