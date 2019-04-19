var tools = {
	// 获取元素的样式
	getStyle : function (obj, attr) {
	
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	},
	
	// 让元素匀速运动到指定终点
	linearMove : function(obj, attr, end, time){
		// 先清除前一次的定时器
		clearInterval(obj.timer);
		//起点值
		var start = parseInt(this.getStyle(obj,attr));
		//总距离
		var distance = end - start;
		// 速度
		var steps = parseInt(time/20);
		// 计算px /步
		var speed = distance/steps;
		obj.timer = setInterval(function(){
			
			start += speed;
			obj.style[attr] = start + "px";
			if(Math.abs(start - end) < Math.abs(speed)){
				clearInterval(obj.timer);
				obj.style[attr] = end + "px";
			}
		},20);
		
	}
}
