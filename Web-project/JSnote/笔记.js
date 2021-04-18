


1. switch...case、defult(不满足时执行)
   break：结束当前循环，跳出循环
   		for(var i = 0;i < 10;i++)
   		{
   			if(i==5){
   				break;//1,2,3,4
   			}
   		}
   continue：结束本次循环，执行下一次循环
   		for(var i = 0;i < 10;i++)
   		{
   			if(i==5){
   				continue;//1,2,3,4,6,7,8,9
   			}
   		}
2. 函数通常首字母小写
	类命名首字母大写
3. 全局变量和局部变量
	<script>
		var m = 10, k = 2;//全局变量
		function demo(a,b){
			var sum = 3;//局部变量
			x = 10;//函数被调用时， x 变量也是全局变量
		}
		demo();
	</script>
4. 异常捕获： 
	1) 异常： 当JS引擎执行JS代码时，发生了错误，导致程序停止运行
	2) 异常抛出：当异常产生，并且将这个异常生成一个错误信息
	3) 异常捕获：
			try {
				发生异常代码块；
			}catch(err){
				错误信息处理;
			}

		//提示异常	
			<script>
				var str = "hello"; //加上这句后就没有异常了
				function demo(b){
					try{
						alert(str);
					}catch(err){
						alert(err);
					}		
				}
				demo();
			</script>

	4) throw (扔出异常)
			<form action="">
				<input type="text" id="text">
				<input type="button" id="btn" onclick="demo()" value="anniu">
			</form>
			<script>
				function demo(){
					try{
						var e = document.getElementById('text').value;
						if (e=="") {
							throw "请输入";
						}
					}catch(err){
						alert(err);
					}		
				}
				demo();
			</script>
5. 常见的事件：
	onClick: 单击
	onMouseOver: 鼠标经过事件
	onMouseOut：鼠标移出事件
	onChange: 文本内容改变事件
	onSelect: 文本框选中事件
	onFocus: 光标聚集事件
	onBlur: 移开光标事件
	onLoad: 网页加载事件
	onUnload: 关闭网页事件

6. DOM 对象
	1)当网页被加载时，浏览器会创建页面的文档对象类型(DOM)
	2) JS能改变页面中的所有HTML元素，属性，CSS样式，对页面中的所有事件作出反应。
	
	点击切换下一张图片：
	<img src="img1.jpg" id="imgid">
	<button onclick="demo()">anniu</button>
	<script>
		function demo(){
			document.getElementById('imgid').src="img2.jpg";
		}
	</script>

	DOM EventListener(句柄):
		概念：当某个函数名或元素需要修改时，由于该元素或函数已经在多个地方调用，
			 手动修改比较麻烦还以出错，所以使用句柄的方式完成。
		事件处理方法： addEventListener("事件名"，"事件处理函数"，"布尔值"): 用于指向元素添加事件句柄
			  布尔值：true：事件捕获  false：事件冒泡
			   removeEventListener(): 移除方法添加的事件句柄；
		给一个句柄添加一个事件之后，他不会影响第二个句柄的添加，句柄之间不会覆盖，

7. 事件
	事件流：描述事件在页面中接收时间的顺序
	事件冒泡：有具体元素接收，然后逐级向上传播至最不具体的元素的节点
	事件捕获：最不具体的节点接收事件，最具体的节点应给是最后接收事件。

	事件处理:
		html事件处理：直接添加到html结构中。
		DOM0级事件处理：把一个函数赋值给一个事件处理程序属性。
		DOM2级事件处理：addEventListener("时间名"，"事件处理函数",布尔值)；
						事件移除：removeEventListener();

		IE事件处理程序：
			attachEvent
			detachEvent

	事件对象：在触发DOM事件的时候会产生一个对象
		事件对象 Event 
			type:获取事件类型
			target：获取事件目标
			stopPropagation():阻止事件冒泡
			preventDefault():阻止事件默认行为

8.内置对象
	string 对象
		indexOf():在字符串中查找字符串
		match():内容匹配
		replace：替换内容
		toLowerCase():转小写
		toUpperCase():转为大写
		string>split():字符串转为数组
		字符串属性和方法：
			1)属性：length 、prototype、constructor
			2)方法：charCharCode() indexO
9. date对象
	getFullYear() :年份
	getTime()：时间
	setFullYear():设置具体日期
	getDay():获取星期

10.数组对象
	数组常用方法：
		concat():合并数组
		sort():排序
		push():末尾追加元素
		reverse():数组元素翻转

11.math对象
	round():四舍五入
	random():返回0~1之间的随机数
	max():
	min():
	abs():

12.JS DOM对象控制HTML
	方法：getElementByName(): 获取name
		  getElementById(): 获取id
		  getElementByTagName(): 获取元素
		  getAttribute(): 获取元素属性
		  setAttribute(): 设置元素属性
		  childNodes(): 访问子节点
		  parentNode(): 访问父节点
		  createElement(): 创建元素节点
		  createTextNode(): 创建文本节点
		  insertBefore(): 插入节点
		  removeChild(): 删除节点
		  offsetHeight: 网页尺寸
		  scrollHeight：网页尺寸
