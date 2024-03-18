import React, {useEffect,useState} from "react";
import MiddleComponent from "./MiddleComponent";
function HeaderforPage()
{
      return(
        <div calssName="Header">
            <p> {count}</p> Hello World
            <button onClick={() => setCount(count+1)}>Click me</button>
        </div>
    )
}

export default HeaderforPage;
