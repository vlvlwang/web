class Btn{
	constructor(btn){
		// 找到点击弹框按钮
		this.btn = document.querySelector("#btn"); //传参形式   （可更换参数）
		this.container = document.querySelector("#container"); //直接查找形式
		this.bindEvents();
	}
	bindEvents (){
//		// 箭头函数没有this
		this.btn.onclick = () =>{
			console.log(this);	
		// 给container 插入内容
			this.container.innerHTML = '<h4>新鲜事儿</h4>'+
				'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
				'<p><label>文章标题：<input id="username" type="text"></label></p>'+
				'<p><label>内&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp容：<input id="text" type="text"></label></p>'+
				'<p><button id="loginBtn" class="loginBtn" type="button">发布</button></p>';
		// 让container显示
			tools.showCenter(this.container);
			this.modal = document.createElement("div"); //创建遮罩层
			this.modal.className = "modal";  // 命名
			document.body.appendChild(this.modal); // 把遮罩层插入到body中			
		}
		this.container.onclick = e =>{
			e = e || event;
			var target = e.target || e.scrElement;
			switch (target.id){
				case "loginBtn":
					let username = document.querySelector("#username").value;
					let text = document.querySelector("#text").value;
					let rootText = document.querySelector("#rootText");
					let wb = rootText.querySelector(".wb");
				// 将内容放到页面中去
					let date = new Date(); // 现在时间
					let year = date.getFullYear();  // 设置年份
					let month = date.getMonth() + 1; //  设置月份  因为月份为 0-11，  所以在设置时，需要 +1
					let nowDate = date.getDate();   //  设置  天
					let str = year + "年" + month + "月" + nowDate + "日";
					wb.innerHTML = text + "<br>" + str;
					rootText.style.display = "block";
				case "closeBtn":
					this.container.style.display = "none"; // 让发布框隐藏
					document.body.removeChild(this.modal); // 删除遮罩层
					break;
				default:
					break;
			}
	
		}
		// 获取时间方法
		
	}
	
		
}