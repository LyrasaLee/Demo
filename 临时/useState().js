/*  useState用法： 写demo，怎么改变状态的值  */

// 函数式组件  ---使用hook
function Demo(){ //状态和更新状态的方法
	const [count,setCount] = React.useState(0) // 初始值为0  setCount：改变0的值
	React.useEffect(()=>{
		let timer = setInterval(()=>{
			setCount(count => count+1 )
		},1000)
		return ()=>{ //返回的函数相当于类组件中的componentWillUnmount() 
			clearInterval(timer)
		}
	},[])//[]：不添加[],相当于监测所有，加[],谁都不监测 [count]:监测count
	return (
		<div>
			<h2>当前求和为：{count}</h2>
			<button onClick={setCount(count => count+1 )}>点我+1</button>
		</div>
	)
}
// export default Demo

function Demo1(){
    const myRef = React.useRef()
    function show(){//提示输入的回调
		alert(myRef.current.value)
	}
    return (
        <div>
            <input type="text" ref={myRef}/>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}
export default Demo1