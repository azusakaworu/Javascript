//js

/*电子邮件正则表达式--------*/

var emailReg =/^\w{3,}@[A-z]{2,6}\.[A-z]{2,5}$/;
var email = "naruto@gmail.com";
console.log(emailReg.test(email));


//常用的正则表达式网上有，可以用，要会改

//验证一年的12个月
var monthReg = /^(0?[1-9]|1[0-2])$/;
var month = "1";
console.log(monthReg.test(month));
