import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../App";

const Feedback=()=>{
    const {id}=useParams();
    const {posts}=useContext(ProductContext);
    const post=posts && posts.find((post)=>post.id==id)
    return (
        <>
        <h1>Feedback-{id}</h1>
        <Link to={"/edit/"+id}>
            Edit
        </Link>
        {
            <li>
                <h2>
                    {post.name}
                </h2>
                <p>{post.email}</p>
                <p>{post.body}</p>
            </li>
        }

        </>
        
    )
}
export default Feedback;