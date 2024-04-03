import React from "react";
import "./posttt.css"
const Posttt = (props)=>{

    return( 
        <div onClick={props.click}>
        <h1>titlle</h1>
        <div>
            author:
        </div>
        <div>
            content:<p>{props.data}</p>
        </div>
        
        </div>
    )
}
export default Posttt