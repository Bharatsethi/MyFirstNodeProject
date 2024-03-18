import React, {useEffect,useState} from "react";
import MiddleComponent from "./MiddleComponent";
function Component()
{
    const [count, setCount] =useState(10);
    useEffect(() => {
       document.title = `You Clicked ${count} times`;
    }, [count]);

    return(
        <div>
            <p> {count}</p> Hello World
            <button onClick={() => setCount(count+1)}>Click me</button>
        </div>
    )
}

export default Component;


