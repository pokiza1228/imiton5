import { useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../App";

const Edit=()=>{
    const {id}=useParams();
    const name=useRef();
    const email=useRef();
    const body=useRef();
    // const nameValue=name.current.value;
    // let emailValue=email.current.value;
    // let bodyValue= body.current.value
    
    const {posts,setPosts}=useContext(ProductContext);
    const post=posts && posts.map((post)=>post);
    let edit=post.find((post)=>post.id===+id)
    
    const submit=(evt)=>{
        evt.preventDefault();
        const editIndex=posts && posts.findIndex((abs)=>abs.id===+id)
        let newPost= {
            "postId":edit.postId,
            "id":edit.id,
            "name": name.current.value,
            "email": email.current.value,
            "body":body.current.value
        }  
        
        setPosts((post)=>{return( post.splice(editIndex, 1, newPost),post)});
    }
    return(
        <>
        <h1>Edit</h1>
        <form onSubmit={submit}>
            <label>
                <input ref={name} type={"text"} defaultValue={edit.name}></input>
            </label>
            <label>
                <input ref={email} type={"email"} defaultValue={edit.email}></input>
            </label>
            <label>
                <input ref={body} type={"text"} defaultValue={edit.body}></input>
            </label>
            <button type="submit">Edd comment</button>
        </form>
        </>
    )
}

export default Edit;