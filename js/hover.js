/*
  hover(obj,overfun,outfun)  鼠标移入移除事件 
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
;(function(win){
	function hover (obj,overfun,outfun) {
		if(overfun){
		    obj.onmouseover=function  (e) {
				checkHover(e,obj)&&overfun.call(obj);
		    }
		}
		if(outfun){
			obj.onmouseout=function  (e) {
				checkHover(e,obj)&&outfun.call(obj);
		    }
		}
	}
	//判断某个元素是否包含有另外一个元素
	function contains (parent,child) {//返回 true  parent 包含 child    返回false 不是包含关系
		if(parent.contains){//如果对象支持contains
			// 如果  父对象 包含 子对象   并且  父对象不等于 子对象 返回 true 
			return parent.contains(child) && parent!=child;
		}else{
			//父对象 包含 子对象  16   父对象 在子对象之前 4  = 20
			return (parent.compareDocumentPosition(child)===20);
		}
	}
	//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
	function checkHover (e,target) {
		//target 对象 
		if(getEvent(e).type=="mouseover"){
			return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
				!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
		}else{
			return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
				!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
		}
	}
	//获得事件对象
	function getEvent (e) {
		return e||window.event;
	}
	win.hover=hover;	
})(window);