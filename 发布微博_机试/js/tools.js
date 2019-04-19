var tools = {
	setStyle : function (obj, attr) {
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	},
	getBody : function () {
		return {
			width : document.documentElement.clientWidth || document.body.clientWidth,
			height : document.documentElement.clientHeight || document.body.clientHeight
		}
	},
	
	showCenter : function (obj) {
		
		obj.style.display = "block";
		// 加上绝对定位
		// 计算坐标
		let _this = this;
		function center () {
			var _top = (_this.getBody().height - obj.offsetHeight) / 2;
			var _left = (_this.getBody().width - obj.offsetWidth) / 2;
			console.log(obj.offsetHeight, obj.offsetWidth);
			_this.setStyle(obj, {
				position :"absolute",
				left : _left + "px",
				top : _top + "px"
			});
		};
		center();
		// 窗口大小发生改变的时候重新计算坐标
		window.onresize = center;
	}
}