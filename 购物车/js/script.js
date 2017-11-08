//封装函数获取元素名称
//
//
function getClass(cName){

	var str=[];

	var dom=document.getElementsByTagName("*");

	var reg=new RegExp("(\\s|^)"+cName+"(\\s|$)");

	for(var i=0;i<dom.length;i++){

		if(reg.test(dom[i].className)){

			str.push(dom[i]);

		}
	}

	return str;

}

//全选和单选按钮
var check=getClass("check"),
	checkAll=getClass("check-all"),
	index=0;

for(var i=0;i<check.length;i++){

	check[i].onclick=function(){

		if(this.checked==false){

			for(var i=0;i<checkAll.length;i++){

				checkAll.checked=false;
			}
		}
		if(this.className=="check-all check"){

			for(var i=0;i<check.length;i++){

				check[i].checked=this.checked;
			}
		}
		if(this.className=="check-one check"){

			index++;

			if(index==4){

				for(var i=0;i<checkAll.length;i++){

					checkAll[i].checked=true;
				}
			}
		}
		getTotol();
	}

}

//表尾数量和合计
var selectedTotal=document.getElementById("selectedTotal"),
	priceTotal=document.getElementById("priceTotal"),
	cartTable=document.getElementById("cartTable"),
	tr=cartTable.tBodies[0].rows,
	selectedViewList=document.getElementById("selectedViewList");

function getTotol(){

	var total=0,
		price=0,
		html="";

	for(var i=0;i<tr.length;i++){

		if(tr[i].getElementsByTagName("input")[0].checked){

		   total+=parseInt(tr[i].getElementsByTagName("input")[1].value);
		   price+=parseFloat(tr[i].cells[4].innerHTML);
		   html+=`<div><img src="${tr[i].getElementsByTagName("img")[0].src}"><span index="${i}">取消选择</span></div>`;
		}
	}

	selectedTotal.innerHTML=total;
	priceTotal.innerHTML=price.toFixed(2);
	selectedViewList.innerHTML=html;
}

//表体中的数量、加减符号 =和删除
for(var i=0;i<tr.length;i++){

	tr[i].onclick=function(e){

		var e=window.event||e,
			tar=e.target||e.srcElement;

		switch(tar.className){

			case "add":

				this.getElementsByTagName("input")[1].value=parseInt(this.getElementsByTagName("input")[1].value)+1;

				if(this.getElementsByTagName("input")[1].value>1){

					this.cells[3].getElementsByTagName("span")[0].innerHTML = "-";
				}
			setTotol(this);

			break;


			case "reduce":

					this.getElementsByTagName("input")[1].value=parseInt(this.getElementsByTagName("input")[1].value)-1;

					if(this.getElementsByTagName("input")[1].value<=1){

						this.getElementsByTagName("input")[1].value=1;

						this.cells[3].getElementsByTagName("span")[0].innerHTML = "";
					}
				setTotol(this);

				break;

			case "delete":
					this.parentNode.removeChild(this);
				break;
		}
		getTotol();
	}
}

//表体中的小计
function setTotol(tr){

	if(tr.getElementsByTagName("input")[1].value<1){

		tr.getElementsByTagName("input")[1].value=1;
	}

	tr.cells[4].innerHTML=(tr.getElementsByTagName("input")[1].value*tr.cells[2].innerHTML).toFixed(2);
}
//表尾的点击
var foot=document.getElementById("foot");

foot.onclick=function(){

	if(selectedTotal.innerHTML>0){

		foot.className="foot show";
	}
	else{

		foot.className="foot";
	}
}

//取消选择的点击

selectedViewList.onclick=function(e){


	e.stopPropagation();

	if(e.target.nodeName=="SPAN"){

		tr[e.target.getAttribute("index")].getElementsByTagName("input")[0].checked = false;

		getTotol();
	}

}
