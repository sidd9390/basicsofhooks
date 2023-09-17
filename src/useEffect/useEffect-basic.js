import React, { useState , useEffect} from "react";

export const Index = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("hello i am usestate",count );
    }, []);
  return (
    <div>
        <h1>Hello I am useEffect Hook</h1>
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
