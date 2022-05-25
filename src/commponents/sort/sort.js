import { useContext, useRef } from "react";
import { ProductContext } from "../../App";

const Sort=()=>{
    const {setPosts}=useContext(ProductContext);
    const ref1=useRef();

    const sort=(evt)=>{

        evt.preventDefault();
        const value=ref1.current.value

        setPosts((post)=>[
            ...post.sort((a,b)=>{
                switch (value) {
                    case "1":
                        if (a.name > b.name) {
                            return 1
                        } else if (a.name < b.name) {
                            return -1
                        } else {
                            return 0
                        }
                    case "2":
                        if (a.name < b.name) {
                            return 1
                        } else if (a.name > b.name) {
                            return -1
                        } else {
                            return 0
                        }
                        }
                    })
        ])
       
    }
    
    
    return (
        <>
            <p>Sort by</p>
            <form onSubmit={sort}>
                <select ref={ref1}>
                    <option value="1"> A-Z</option>
                    <option value="2">Z-A</option>
                </select>
                
                <button>sort</button>
            </form>
                
        </>
    )
}
export default Sort;