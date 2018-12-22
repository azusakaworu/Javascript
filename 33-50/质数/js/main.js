//js


/*质数练习：在页面中接收一个用户输入的数字，并判断该数是否是质数，

      质数: 只能被1和它自身整除的数，1不是质数也不是合数，质数必须是大于1的自然数。




var a = prompt("enter a number > 1 integer");

if(a<=1){alert("不合法");}
else{
    var flag = true;

	for(var b=2;b<a;b++){if(a%b ==0){flag = false;}}

    if(flag){alert(a +" is a prime number");}else{alert("not a prime number");}
     }
*/

//练习：打印出1-100所有质数


//测试性能
console.time("test");

for(var num = 2;num<=10000;num++){
	//console.log(num);
	var flag =true;
	for(var NUM =2; NUM<=Math.sqrt(num);NUM++){
		if(num%NUM ==0){
			flag = false;
			//一旦进入这里，循环无意义 用break终止内部循环，提高性能
			break;

            //测试10000 ：加了break 25毫秒
            //测试10000 ：不加break 197毫秒

            //测试10000 ：加了break 用了Math.sqrt(); 4毫秒
            //测试10000 ：不加break 用了Math.sqrt(); 6.6毫秒
		}
	}

	if(flag){//console.log(num);
	}
	
}

console.timeEnd("test");


//对一个数开方
var result = Math.sqrt(36);
console.log("result =" + result);