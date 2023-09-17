import React, { useState , useEffect} from "react";

export const Index = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);
    useEffect(() => {
        console.log("hello i am usestate",count );
    }, [count]);
  return (
    <div>
        <h1>Hello I am useEffect Hook Advanced</h1>
        <h1 onClick={() => setToggle(!toggle)}>{toggle ? "open" : "close"}</h1>
        <h3>{count}</h3>
        <button onClick={() => {
            setCount(count + 1);
        }}>
            +
        </button>
    </div>
  )
}
export default Index;
