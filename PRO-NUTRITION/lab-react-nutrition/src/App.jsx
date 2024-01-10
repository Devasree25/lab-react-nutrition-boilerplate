 import React from "react";
 import './App.css';
 import {useState} from 'react';
 import FoodData from '../resources/FoodData';
 import Search from './Components/Search'; 
 import FoodBox from "./Components/FoodBox"

function App(){
  const [search, setSearch] = useState("")

  const filteredSearch = FoodData.filter((e)=>{
    return e.name.toLowerCase().includes(search.toLocaleLowerCase())
  })




  return(
    <>
    <div className="box">
    <h1>Pro-nutrition</h1>
    <Search setSearch = {setSearch} />
    {
      filteredSearch.length <= 0 ? (
        <h3>No data found</h3>

      ) : (
        filteredSearch.map((e, i)=>(
          <FoodBox key={i} ele = {e} index= {i} />
        ))
      )
    }
    

    </div>
    
    </>
  )
 }
export default App;