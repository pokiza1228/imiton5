import { useContext, useRef, useState } from "react";
import { ProductContext } from "../../App";

const Filter=()=>{
    const {posts,setPosts}=useContext(ProductContext);
    const [filterPost,setFilter]=useState(posts);

    const search=useRef();
    const sumbit=(evt)=>{
        evt.preventDefault();
        const searchValue=search.current.value;
        
        setPosts([
            ...filterPost.filter((product)=>{
                return(
                    product.name.toLowerCase()).includes((searchValue.toLowerCase())
                )
            }
            )
        ])
    }
    return (
        <form onSubmit={sumbit}>
            <p>Filter</p>
            <label>
                Search
                <input ref={search} type={"search"} placeholder={"Baxromova Pokiza"}></input>
            </label>
            <button type="submit">Filter</button>
        </form>
    )
}

export default Filter;