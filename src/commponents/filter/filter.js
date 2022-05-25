import { useContext, useRef } from "react";
import { ProductContext } from "../../App";

const Filter=()=>{
    const {setPosts}=useContext(ProductContext);
    const search=useRef();
    const sumbit=(evt)=>{
        evt.preventDefault();
        const searchValue=search.current.value;
        console.log(searchValue)
        setPosts((post)=>[
            ...post.filter((product)=>{
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