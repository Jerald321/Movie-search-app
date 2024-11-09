import React, {  useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

import Header from './Header';
import { titlevalue } from '../App';





const Nav = () => {

  const { Title, setTitle } = useContext(titlevalue);
  
  
 
  function handlesumit(event){
    // event.preventDefault();
    console.log( setTitle);
    
  }
 useEffect(()=>{
  handlesumit()
 },[Title])
  return (
   <div>

  
  <nav className='flex justify-around border-2  bg-lime-500 rounded-lg'>
  <h1 className='capitalize font-bold text-white  mt-2'>movie app search</h1>
    <form action="" className='mt-0' onSubmit={handlesumit}>
      <div className='searchbox'>

    
      <FaSearch  className="mt-1 small"/>
        <input type="text" placeholder='movie search'  className="search bg-lime-500 md"    
          value={Title}
          onChange={(e)=>{
            setTitle(e.target.value)
           
            
          }}
         
        />
         </div>
       
     
       
    </form>
    
   
   
   
  </nav>
  
  

    </div>
  )
}

export default Nav
