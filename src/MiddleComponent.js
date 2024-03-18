import React, {useEffect,useState} from "react";
import ChildComponent from "./ChildComponent";
const MiddleComponent = ({data}) => {
    return(
        <div>
            <h2> Middle Component - Why are you in middle</h2>
        <ChildComponent data={data} />
        </div>
        

    );
};

export default MiddleComponent;