import React from 'react'
import "./Auther.css"
import Booklist from "./Booklist.js";
import image4 from "./images/image4.jpg";
import AuthersName from "./AuthersName";
const Authers = () => {
  return (
    <div>
   <h2  className='heading'>
    BOoKS At LibRaRy
    </h2>
    <span className='line'>
          <hr />
        </span>
    <img className='image'
            src={image4}
            alt="First slide"
          />

         <h3 className='secondheading'> <b>Best sellers </b></h3> 
        <span className='line'>
          <hr />
        </span>
        <div> <Booklist /></div>
        
        
        
        <h2 className='secondheading'> Popular Auther & Series </h2>
        <span className='line'>
          <hr />
        </span>
        <div><AuthersName/></div>
        

    </div>
  )
}

export default Authers

