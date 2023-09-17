import React, { useState , useEffect} from "react";

export const Index = () => {
    const [count, setCount] = useState(0);
    const [pagewidth, setPagewidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeHandler = () => {
            setPagewidth(window.innerWidth);
        };
        window.addEventListener("resize", resizeHandler);
        console.log("hello i am usestate",count );
        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    });
  return (
    <div>
        <h1>Hello I am useEffect Hook Advanced</h1>
        <h3>{pagewidth}</h3>
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
