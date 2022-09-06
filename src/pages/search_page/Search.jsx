
import axios from 'axios'
import React, { useState } from 'react'
import "./search.css"
function Search() {
    const [breedname, setSearch]= useState("")
    const [images , setImages] = useState([])

    const handleSearch =()=>{
        axios.get(`https://dog.ceo/api/breed/${breedname}/images`).then((res)=>{
            // console.log(res.data.message);
            setImages(res.data.message)
        })
    }
  return (
    <div className='search'>
        <input className='searchInput' onChange={(e)=>setSearch(e.target.value)}></input>
        <button className='searchButton' onClick={handleSearch}>SEARCH</button>
        <div className='puppyImage'>
             {images.map((e)=>(
                <div ><img src={e} alt=""className='imagediv' /></div>
             ))}

        </div>
    </div>
  )
}

export default Search