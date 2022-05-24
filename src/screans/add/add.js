import { useContext, useRef } from "react";
import { ProductContext } from "../../App";

const Add=()=>{
    const {posts,setPosts}=useContext(ProductContext);

    const Name=useRef();
    const Email=useRef();
    const Body=useRef();

    const submit =(evt)=>{
        evt.preventDefault();
        let nameValue=Name.current.value;
        let emailValue=Email.current.value;
        let bodyValue=Body.current.value;


        let newPost= [
                ...[{
                    "postId": Math.floor(Math.random()*1000),
                    "id": Math.floor(Math.random()*1000),
                    "name": nameValue,
                    "email": emailValue,
                    "body": bodyValue
                }],
                ...posts
        ]
            setPosts(newPost);
    }



    
    return (
        <>
            <h1>Add</h1>
            <form onSubmit={submit}>
                <label>
                    <input  ref={Name} type={"text"} placeholder="name"></input>
                </label>
                <label>
                    <input ref={Email} type={"email"} placeholder="@baxromova"></input>
                </label>
                <label>
                    <input ref={Body} type={"text"} placeholder="birnimalar"></input>
                </label>
                <button to={"/"} type="submit">Add</button>
            </form>
        </>
    )
}

export default Add;