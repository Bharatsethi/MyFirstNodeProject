import React, {useEffect,useState} from "react";

const ChildComponent = ({data}) => {
    return(
        <div> <h3> Child Component - Chota bacha samajh ke ...</h3>
        <p> {data}</p>
</div>
       
    );
};
export default ChildComponent;