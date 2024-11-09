import React, { useContext, useEffect, useState } from 'react';
import Home from './Home';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { titlevalue } from '../App';

const Header = () => {
  const { Title,page,setPage,perpage,setPerPage } = useContext(titlevalue);

  
  const [movie, setMovie] = useState([]);

  function loadind(){
    // const totalpost=page*perpage
    // const firstpage =totalpost -perpage
    setPage(page +1)
   
    
    
  }

  async function apicall() {
    try {
      const res = await axios.get(`https://omdbapi.com/?s=${Title}&apikey=e991aa45&page=${page}`);
      const data = res.data;
      console.log(data);
      setMovie(data.Search || []);
    } catch (err) {
      console.log(err);
      document.write("404 error found");
    }
  }

  useEffect(() => {
    apicall();
  }, [Title,page]);

  return (
    <div>


    <div className='flex justify-evenly flex-wrap  mt-8 '>
      {movie.map((iteam) => (
        <div key={iteam.imdbID}>
          <Link to={`/nextpage/${iteam.imdbID}`}>
            <Home iteam={iteam} Title={Title}
            
            />
           
          </Link>
         
        </div>
      ))}
     
    </div>
    <button className="loading" onClick={loadind}>nextpage</button>
    </div>
  );
}

export default Header;
