function $(selector,range){
    var range=range||document;
    if(typeof selector=='string'){
        if(selector.charAt(0)=='#'){
            return document.getElementById(selector.substr(1))
        }
        if(selector.charAt(0)=="."){
            return getclass(selector.substr(1),range)
        } 
        if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
            return range.getElementsByTagName(selector) 
        }
    }
    else if(typeof selector=='function'){
         window.onload=selector;
        }
    }



//获取类名
function getclass(classname,range){ 
	//如果没有传范围值，则默认为document
	 var range=range||document
     if (document.getElementsByClassName) {
         return range.getElementsByClassName(classname)
     } else{
     	var arr=[]
         var all=range.getElementsByTagName("*")
         for (var i = 0; i < all.length; i++) {
         	if(all[i].className==classname){
                 arr.push(all[i])
         	}
         };
         return arr
     };
}


//获取类名  形参中classname是字符串  range永远是一个对象object
function getclass(classname,range){ 
    //如果没有传范围值，则默认为document
     var range=range||document
     //判断浏览器是否支持获取类名
     if (document.getElementsByClassName) {
        //支持直接获取
         return range.getElementsByClassName(classname)
     } else{
        var arr=[]
         var all=range.getElementsByTagName("*")
         for (var i = 0; i < all.length; i++) {
            if(checkClassName(all[i].className,classname)){
                 arr.push(all[i])
            }
         };
         return arr
     };
}

//函数检测类名是否包含所需类名
function checkClassName(tagname,classname){
    //利用空格将类名进行分割
    var arr=tagname.split(" ")
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]==classname){
            return true
        }
    }
   return false
}

//兼容性获取
function gettext(obj,val){
    //如果参数val未定义
    if (val==undefined) {
        //判断是否支持textContet属性，
        if (obj.textContent!=undefined) {
            //支持的话则直接返回
            return obj.textContent
        } else{
            //不支持则使用innerText方法
            return obj.innerText       //IE支持
        };
    }else{
        //如果第二个参数有值则代表是用来设置内容
       if (obj.textContent!=undefined) {
        //如果支持textContent属性则利用textContent设置
           obj.textContent=val
        } else{
        //如果不支持则说明为IE6-8浏览器，则利用innerText设置
           obj.innerText=val
        };
        
    };
    
}

//获取元素属性
function getstyle(obj,attr){
    //判断是否支持currentStyle的属性
if (obj.currentStyle!=undefined) {
    //attr是个变量  所以要添加[attr]
    return obj.currentStyle[attr]
} else{
    //不支持则使用getComputerStyle(obj,null)[attr]方式
    return getComputedStyle(obj,null)[attr]
};
}


//获取元素子节点

function getchilds(obj){
    //获取所有子节点
  var childs=obj.childNodes
  //声明一个新的数组用来放所需要的节点
  var newArr=[]   
  for (var i = 0; i < childs.length; i++) {
         //如果节点类型是8  注释节点  以及     节点类型是 3    而且  节点内容是空的话-----即为换行  则不需要
      if ( !((childs[i].nodeType==8) || ( childs[i].nodeType==3 && trim(childs[i].nodeValue)=="") )) {
        //取反后将符合不需要的内容进行除外  上下的移至新的数组
        newArr.push(childs[i])
      };
  };
  //遍历结束后将数组返回
  return newArr 
}
//将字符串中开头结尾的空格去掉
function trim(str){
    //利用正则表达式用来区分换行以及文本
    return str.replace(/^\s+|\s+$/g,"")//---------替换将文本中的开头与结尾的空格进行空字符串替换  
}

//获取第一个子节点
function getFirNode(parent){
   return getchilds(parent)[0]
}

//获取最后一个子节点
function getLastNode(parent){
    var  childs=getchilds(parent)
    return childs[childs.length-1]
}

//获取任意一个子节点
function getRanNode(parent,i){
    var childs=getchilds(parent)
    if (i>=childs.length) {
        return false
    };
    return childs[i]
}

//获取下一个兄弟元素
function getNextSib(obj){
    var next=obj.nextSibling
    if (!next) {
        return false
    };
    while((next.nodeType==8) || ( next.nodeType==3 && trim(next.nodeValue)=="") ){
        next=next.nextSibling
        if (!next) {
            return false
        };
    }
    return next
}

//获取上一个兄弟元素
function getPreSib(obj){
    var pre=obj.previousSibling
    if (!pre) {
        return false
    };
    while((pre.nodeType==8) || ( pre.nodeType==3 && trim(pre.nodeValue)=="") ){
        pre=pre.previousSibling
        if (!pre) {
            return false
        };
    }
    return pre
}

//插入到某个对象之前
function insertBefore(obj1,obj2){
    var parent=obj2.parentNode
    parent.insertBefore(obj1,obj2)
}

//插入到某个对象之后
function insertAfter(obj1,obj2){
    var parent=obj2.parentNode
    var obj3=getNextSib(obj2)
    if (!obj3) {
        parent.appendChild(obj1)
    }else{
    parent.insertBefore(obj1,obj3)   
    }
}

//obj:給哪个对象添加
//ev:什么事件
//fun:事件处理程序
function addEvent(obj,even,fun){
  if(obj.addEventListener){
    return obj.addEventListener(even,function(){
        fun.call(obj);
    },false);
  }
  else{
    return obj.attachEvent("on"+even,function(){
        fun.call(obj);
    });
    //IE8中，this不指当前对象，指的是window
  }
}
