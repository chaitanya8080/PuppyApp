

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./homepage.css"
function Homepage() {

    const [list, setList] = useState([])
     let arr = [];
     for(var key in list){
         arr.push(key);
     }
    useEffect(()=>{
        const getData = ()=>{
            axios.get("https://dog.ceo/api/breeds/list/all").then((res)=>{
                setList(res.data.message)
            })
        }
        getData()
    },[])

    const handleClick=(e)=>{
        console.log(e.target.value)
        // window.location.replace(`/puppy/?{}`);
    }
  
   

console.log(arr)

  return (
    <div className='cart'>
      {arr.map((e)=>(
        <div onClick={handleClick}>
            <div className='cartelem' onClick={handleClick}>{e}</div>
        </div>
      ))}
        </div>
  )
}

export default Homepage