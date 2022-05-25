import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../App";
import Filter from "../../commponents/filter/filter";
import Sort from "../../commponents/sort/sort";

const Main=()=>{
    const {posts, setPosts}=useContext(ProductContext);
    
    return (
        <>
         <h1>Main</h1>
         <h2>Comments-{posts.length}</h2>
         <Link to={"/add"}>Add comment</Link>
         <Sort />
         <hr></hr>
         <Filter />
         <ul>
             {
                 posts && posts.map((post)=>
                 <li key={post.id}>
                     <Link to={"/feedback/"+post.id}>
                        <h2>{post.name}</h2>
                     </Link>
                     <p>{post.email}</p>
                     <p>{post.body}</p>
                 </li>)
             }
         </ul>
        </>
       
    )
}
export default Main;