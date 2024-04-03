import React from "react";
import axios from "axios";
import Posttt from "./post/Posttt" // Ensure the path is correct


class Blog extends React.Component {
  state = {
    posts: [],

    postSelectedId:1
   
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((response) => {

  
this.setState({posts:response.data.slice(0,4)})

  })
   
  }

  selectedIdHandler = (id)=>{


    axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${this.state.postSelectedId}`)
      .then((res)=>{

console.log(res)

      })

   this.setState({

    postSelectedId:id
   })

  }
  testipiHandler(){
    const data= {
      name:"ali",
      ID:2,
    }
  axios.post("https://modal-2b71d-default-rtdb.firebaseio.com/",data)
  
    
  }

  render() {

    const posts = this.state.posts.map((item=>{

return <Posttt 

key={item.id}  title={item.title}
data={item.body}

click={()=>this.selectedIdHandler(item.id)}

/>

    }))
  
    return <>
    ID= {this.state.postSelectedId}
    <button onClick={this.testipiHandler}>test </button>
    
    {posts}
    
    {/* <NewPost  id={this.state.postSelectedId} /> */}
    
    </>;
  }
}
export default Blog;
