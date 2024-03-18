import React, {useEffect,useState} from "react";
import ChildComponent from "../Pages/ChildComponent";
const MiddleComponent = ({data}) => {
    return(
        <div>
            <h2> Middle Component - Why are you in middle</h2>
        <ChildComponent data={data} />
        </div>
        

    );
};

export default MiddleComponent;