

import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
      
       
       <Link to="/"><p>HOME</p></Link> 
       <Link to="/puppy"><p>PUPPY</p></Link> 
       <Link to="/search"><p>SEARCH</p></Link> 
     
    </div>
  )
}

export default Navbar