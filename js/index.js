$(function(){
	//图片变大
	var big =$ ('.cirimg')
	for(var i=0;i<big.length;i++){
			big[i].onmouseover=function(){
				animate(this,{width:135,height:135},200)
			}
			big[i].onmouseout=function(){
				animate(this,{width:125,height:125},200)
			}
	}
//图片向左移
	var imgs=$('.moveimg')
	for(var i=0;i<imgs.length;i++){
			imgs[i].onmouseover=function(){
				animate(this,{marginRight:5},100)
			}
			imgs[i].onmouseout=function(){
				animate(this,{marginRight:0},100)
			}
		}

//透明遮罩
	var boxs=$('.rmpp-middle')[0]
	var list=boxs.getElementsByTagName('li')
	for(var i=0;i<list.length;i++){zhe(list[i])}
	function zhe(list){	var a=$('div',list)
			list.onmouseover=function(){
				animate(a[1],{opacity:0.8},100)
			}
			list.onmouseout=function(){
				animate(a[1],{opacity:0},100)
			}
		}

//banner轮播
var banner=$('.bannerbox')[0]
var box=$('.img')
box[0].style.opacity='1'
var index=0;
var btn=$('.btn');
btn[0].style.background='#ccc';
t=setInterval(move,2000)
function move(){
	index++;
	if(index==box.length){
		index=0;
	}
	for(var i=0;i<box.length;i++){
		animate(box[i],{opacity:0})
		btn[i].style.background='#666';
	}
		animate(box[index],{opacity:1})
		btn[index].style.background='#ccc';
}
banner.onmouseover=function(){
	clearInterval(t)
}
banner.onmouseout=function(){
	t=setInterval(move,2000)
}
	for(var i=0;i<btn.length;i++){
		btn[i].index=i;
		btn[i].onclick=function(){
		for(var i=0;i<box.length;i++){
		animate(box[i],{opacity:0});
		btn[i].style.background='#666';
		}
		animate(box[this.index],{opacity:1})
		btn[this.index].style.background='#ccc';
		}
	}

	
//图片半透明
var opc=$('.opctimg')
for(var i=0;i<opc.length;i++){
	opc[i].onmouseover=function(){
		animate(this,{opacity:0.7},200)
	}
	opc[i].onmouseout=function(){
		animate(this,{opacity:1},200)
	}
}	
//banner右侧图片鼠标移入透明度为1
var opc1=$('.alert-img1')[0]
var opcimg=$('img',opc1)
for(var i=0;i<opcimg.length;i++){
	opcimg[i].onmouseover=function(){
		animate(this,{opacity:1.5},200)
	}
	opcimg[i].onmouseout=function(){
		animate(this,{opacity:0.5},200)
	}
}

var opc2=$('.alert-right')[0]
opc2.onmouseover=function(){
	animate(opc2,{opacity:1},200)
}
opc2.onmouseout=function(){
	animate(opc2,{opacity:0.7},200)
}
//顶部搜索固定

	var flage=true;
	window.onscroll=function(){
		var a=document.documentElement.scrollTop||document.body.scrollTop;
		var dfixed=$('.dfixedsbox')[0]
		if(a>600){
			if(flage){
			flage=false;
			animate(dfixed,{top:0},200)

		}
	}
		else if(a<600){
			if(!flage){				
				flage=true;
				animate(dfixed,{top:-50},200)
			}			
		}
	
//左侧楼层固定
		var fixed=$('.floorbox')[0]
		if(a>800){

			animate(fixed,{marginLeft:-658},200)
			fixed.style.display='block'
		}
		else if(a<800){
				animate(fixed,{marginLeft:-800},200)
		}
//楼层
		var floor=document.getElementsByClassName('qzsg');
		var btn=document.getElementsByClassName('floorbox')[0];
		var span=btn.getElementsByClassName('floor');
		var top=[];
			for(var i=0;i<floor.length;i++){
				top.push(floor[i].offsetTop)
			}	
			var h=document.documentElement.scrollTop||document.body.scrollTop;
			for(var i=0;i<top.length;i++){
				if(top[i]<h+468){
					for(var j=0;j<span.length;j++){
					span[j].style.background=''
					}
					span[i].style.background='red'	
				}
			}
		for(var i=0;i<span.length;i++){
			span[i].index=i;
			span[i].onclick=function(){
				animate(document.documentElement||document.body,{scrollTop:top[this.index]-20},300)
					this.style.background='red';	
			}
		}

		//左侧固定返回顶部
		var back=document.getElementsByClassName('floor9')[0];
		back.onclick=function(){
			animate(document.documentElement||document.body,{scrollTop:0})
		}
		//右侧返回顶部
		fixed2.onclick=function(){
			animate(document.documentElement||document.body,{scrollTop:0})
		}
	}


//右侧固定鼠标移入出现滑动
var fixed1=$('.fixed-4')			
var huadong=$('.huadong')
		for(var i=0;i<fixed1.length;i++){
			fixed1[i].index=i
			fixed1[i].onmouseover=function(){
			animate(huadong[this.index],{opacity:1,right:25,display:'block'},200)		 
		}
			fixed1[i].onmouseout=function(){
			animate(huadong[this.index],{opacity:0,right:55,display:'none'},200)		 
		}
	}
			//右侧返回
		var fixed2=$('.fixed-7')[0]
		var huadong2=$('.huadong2',fixed2)[0]
		fixed2.onmouseover=function(){
			animate(huadong2,{opacity:1,right:25,display:'block'},200)
		}
		fixed2.onmouseout=function(){
			animate(huadong2,{opacity:0,right:55,display:'none'},200)
		}
	//二维码
	var fixed3=$('.fixed-10')[0];
	var huadong1=$('.huadong1')[0]
	fixed3.onmouseover=function(){
		animate(huadong1,{display:'block'},100)
	}
	fixed3.onmouseout=function(){
		animate(huadong1,{display:'none'},100)
	}
	//下拉菜单
	var ones=$('.udline')
	var links=$('.udline3-son')
	for(var i=0;i<ones.length;i++){
		ones[i].index=i;
		hover(ones[i],function(){
			links[this.index].style.display='block'
		},function(){
			links[this.index].style.display='none'
		})
	}
})

