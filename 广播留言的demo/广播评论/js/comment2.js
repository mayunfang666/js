//面向对象
function Comment(){
	this.init();
	this.bindEvent();
}

Comment.prototype={
	constructor:Comment,
	init:function(){
		this.user=document.getElementById('user');
		this.text=document.getElementById('text');
		this.btn=document.getElementById('btn');
		this.img=document.getElementsByTagName('ul')[0].getElementsByTagName('img');
		this.bottom=document.querySelector('.bottom');
		this.dl=document.getElementsByTagName('dl');
		this.count=document.getElementById('count');
		this.label=document.getElementsByTagName('label');
		this.lis=document.getElementsByTagName('li');
		this.str='';
	},
	bindEvent:function(){ //所有事件的集合
		this.getImgs();
		this.bindclick();
		this.changeBj();
		this.countNum();
	},
	getImgs:function(){
		//点击图片时改变图片透明度，获取图片路径
		var that=this;
		for (var i = 0; i < this.img.length; i++) {
			this.img[i].onclick=function(){
				for (var j = 0; j < that.img.length; j++) {
					that.img[j].style.opacity=0.5;
				}
				this.style.opacity=1;
				that.str=this.src;
			}
		}
	},
	bindclick:function(){
		//点击广播，判断里面是否有内容，没有弹出提示，有则添加新dl
		var that=this;
		this.btn.onclick=function(){
			if(that.user.value=='' || that.text.value=='' || that.str==''){
				alert('请输入内容或图片！');
			}else{
				var newDl=document.createElement('dl');
				newDl.innerHTML='<dt><img src="'+that.str+'"></dt><dd><p><b>'+that.user.value+'：</b><span>'+that.text.value+'</span></p><p>'+that.getTime()+'</p></dd><label>删除</label>';
				that.bottom.insertBefore(newDl,that.dl[0]);
				that.user.value='';
				that.text.value='';
				that.changeBj();
			}
		}
	},
	changeBj:function(){
		//封装函数，滑过dl改变背景色，显示删除按钮，点击删除按钮，删除整个dl
		var that=this;
		for (var i = 0; i < this.dl.length; i++) {
			this.dl[i].onmouseover=function(){
				this.style.background='#ccc';
				this.getElementsByTagName('label')[0].style.display='inline-block';
				this.getElementsByTagName('label')[0].onclick=function(){
					that.bottom.removeChild(this.parentNode);
				}
			}
			this.dl[i].onmouseout=function(){
				this.style.background='';
				this.getElementsByTagName('label')[0].style.display='none';
			}		
		}
	},
	getTime:function(){
		//获取时间
		var now=new Date();
		var time=this.addZero(now.getMonth()+1)+'月'+this.addZero(now.getDate())+'日'+' '+this.addZero(now.getHours())+':'+this.addZero(now.getMinutes());
		return time;
	},
	addZero:function(s){
		// 给时间前面加0
		if(s<10){
			return '0'+s;
		}else{
			return s;
		}
	},
	countNum:function(){
		//计算字数
		var that=this;
		this.text.onkeyup=function(){
			that.count.innerHTML=140-this.value.length;
		}
	}
}
new Comment();



/*
//面向过程
var user=document.getElementById('user');
var text=document.getElementById('text');
var btn=document.getElementById('btn');
var img=document.getElementsByTagName('ul')[0].getElementsByTagName('img');
var bottom=document.querySelector('.bottom');
var dl=document.getElementsByTagName('dl');
var count=document.getElementById('count');
var label=document.getElementsByTagName('label');
var lis=document.getElementsByTagName('li');
var str='';

//点击图片时改变图片透明度，获取图片路径
for (var i = 0; i < img.length; i++) {
	img[i].onclick=function(){
		for (var j = 0; j < img.length; j++) {
			img[j].style.opacity=0.5;
		}
		this.style.opacity=1;
		str=this.src;
	}
}

//点击广播，判断里面是否有内容，没有弹出提示，有则添加新dl
btn.onclick=function(){
	if(user.value=='' || text.value=='' || str==''){
		alert('请输入内容或图片！');
	}else{
		var newDl=document.createElement('dl');
		newDl.innerHTML='<dt><img src="'+str+'"></dt><dd><p><b>'+user.value+'：</b><span>'+text.value+'</span></p><p>'+getTime()+'</p></dd><label>删除</label>';
		bottom.insertBefore(newDl,dl[0]);
		user.value='';
		text.value='';
		changeBj();
	}
}
//封装函数，滑过dl改变背景色，显示删除按钮，点击删除按钮，删除整个dl
function changeBj(){	
	for (var i = 0; i < dl.length; i++) {
		dl[i].onmouseover=function(){
			this.style.background='#ccc';
			this.getElementsByTagName('label')[0].style.display='inline-block';
			this.getElementsByTagName('label')[0].onclick=function(){
				bottom.removeChild(this.parentNode);
			}
		}
		dl[i].onmouseout=function(){
			this.style.background='';
			this.getElementsByTagName('label')[0].style.display='none';
		}		
	}
}
changeBj();

//获取时间
function getTime(){
	var now=new Date();
	var time=addZero(now.getMonth()+1)+'月'+addZero(now.getDate())+'日'+' '+addZero(now.getHours())+':'+addZero(now.getMinutes());
	return time;	
}
// 给时间加0
function addZero(s){
	if(s<10){
		return '0'+s;
	}else{
		return s;
	}
}

//计算字数
this.text.onkeyup=function(){
	that.count.innerHTML=140-this.value.length;
}*/