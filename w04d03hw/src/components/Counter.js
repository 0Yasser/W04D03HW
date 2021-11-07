import { useState } from "react";

function Counter(){
    let [count,setCount] = useState(1);
    
  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);
  }

    return(<div>
        <div>{count}</div>
        <button onClick={()=>increment()}>+</button>
        <button onClick={()=>decrement()}>-</button>
        </div>)
}
export default Counter;