import React, { useState } from "react"; 
function Index() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount((prevCount) => {
            return prevCount +1;
        });
        setCount((prevCount) => prevCount+1 );
    }
    const decementCount = () => {
        setCount(count-1);
    }
    return (
      <div className="App">
        <button onClick={decementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
    );
  }
  
  export default Index;