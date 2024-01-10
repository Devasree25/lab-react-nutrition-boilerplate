import React from "react";



function search(props){
    let{setSearch} = props;
    return(
        <>
        <h1 className="text1">Search Anything here...</h1>
        <input type="text" 
        placeholder="type anything here..." 
        onChange={(e)=>{setSearch(e.target.value)}}
        />

        </>
    )
}
export default search;