import React from "react";
import "./Addpost.css"

class Addpost  extends React.Component {
render(){
    return(
        <form className="add-post">
            <label>tittel</label>
            <input type="text"/>

            <label>content</label>
            <input type="text"/>

           <label>author</label>
            <input type="text"/>


        </form>

    )
}



}
export default Addpost