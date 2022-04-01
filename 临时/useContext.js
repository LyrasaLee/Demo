import { createContext, useState } from 'react';
 
export const myContext = createContext(null);//初始值为null
 
const Parent = () => {
    const [count,setCount] = useState(0);
    return (
       <div>
            <button onClick={() => {setCount(count+1)}}>click me</button>
            <myContext.Provider value={count}>
                <Child />
            </myContext.Provider>
       </div>
    )
}
 
// export default Parent;

import { useContext } from 'react';
import { myContext } from './Parent';
 
const Child = () => {
    let count = useContext(myContext);
    return (
        <h2>count</h2>
    )
}        
 
export default Child;