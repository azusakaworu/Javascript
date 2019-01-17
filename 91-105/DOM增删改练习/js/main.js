//js

function delateA(){
		var tr = this.parentNode.parentNode;//a 的爷爷
		var trName = tr.getElementsByTagName("td")[0].innerHTML;
		            //也可以 tr.children[0]
		var flag = confirm("are you sure to delete "+trName+"?");

		if(flag){
			tr.parentNode.removeChild(tr);
		}
		
		return false;//在响应函数最后加这一行 可以不使页面跳转
		             //或者在HTML里改成href="javascript:;"
	};

//点击一个超链接以后，删除一个员工的信息
var allA = document.getElementsByTagName("a");
for(var i = 0; i<allA.length;i++){
	allA[i].onclick = delateA;
	
}




//添加新员工 点击submit以后将 员工的信息添加到表格中
var submit = document.getElementById("addEmpButton");
submit.onclick = function(){
	//获取员工name #empName
	var name = document.getElementById("empName").value;
	var email = document.getElementById("email").value;
	var salary = document.getElementById("salary").value;
	//alert(name+","+email+","+salary);


       /* <tr>
			<td>Jerry</td>
			<td>jerry@sohu.com</td>
			<td>8000</td>
			<td><a href="deleteEmp?id=002">Delete</a></td>
		</tr>
		*/
//创建元素节点（tag)
	var tr = document.createElement("tr");

/*
	var nameTd = document.createElement("td");
    var emailTd = document.createElement("td");
    var salaryTd = document.createElement("td");
    var aTd = document.createElement("td");

    var a = document.createElement("a");


    
//创建文本节点
    var nameText = document.createTextNode(name);
    var emailText = document.createTextNode(email);
    var salaryText = document.createTextNode(salary);
    var deleteText = document.createTextNode("Delete");


//创建好了认亲
//文本节点找元素节点（tag） 做爸爸
     nameTd.appendChild(nameText);
     emailTd.appendChild(emailText);
     salaryTd.appendChild(salaryText);

     aTd.appendChild(a);
     a.appendChild(deleteText);
//td 找tr 爸爸
     tr.appendChild(nameTd);
     tr.appendChild(emailTd);
     tr.appendChild(salaryTd);
     tr.appendChild(aTd);*/

//更省事的：
 tr.innerHTML =  "<td>"+name+"</td>"+
                 "<td>"+email+"</td>"+
                 "<td>"+salary+"</td>"+
                "<td><a href='javascript:;'>Delete</a></td>";


//tr 找table爸爸  #employeeTable
     var employeeTable = document.getElementById("employeeTable");
     var tbody = document.getElementsByTagName("tbody")[0];
     console.log(tbody);
     tbody.appendChild(tr);

     //a.href = "javascript:;";
     var a = tr.getElementsByTagName("a")[0];
      a.onclick = delateA;


};