import React, { useEffect, useState } from 'react';
import { FaV } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

const Nextpage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  function addfav(fav) {
    
   
    alert("added your fav movie")
    
    
    
  }

  useEffect(() => {
    // Fetch movie details from OMDB API using the movie ID
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://omdbapi.com/?i=${id}&apikey=e991aa45`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
 
    
    <div className="movie-detail">
      <div className="movie-detail-header flex flex-col md:flex-row items-center p-4">
        <img 
          src={movie.Poster} 
          alt={movie.Title} 
          className="poster w-64 h-96 object-cover rounded-md shadow-lg"
        />
        <div className="details ml-4">
          <h2 className="title text-3xl font-bold">
            <span
          className='text-blue-700'
          >Movie Title: 
          </span >

          { movie.Title}</h2>
          <p className="release-year text-lg">
          <span
          className='text-blue-700'
          >Year : 
          </span >

            
            {movie.Year}</p>
          <p className="genre text-md text-gray-600">
          <span
          className='text-blue-700'
          > General: 
          </span >
            
            
            {movie.Genre}</p>
            
          



          <p className="genre text-md text-gray-600">
          <span
          className='text-blue-700'
          > Director: 
          </span >
            
            
            {movie.Director}</p>

       
            <p className="genre text-md text-gray-600">
          <span
          className='text-black-700'
          > Actors: 
          </span >
            
            
            {movie.Actors}</p>     

            <p className="genre text-md text-gray-600">
          <span
          className='text-black-700'
          >Language: 
          </span >
            
            
            {movie.Language}</p>  

            <p className="genre text-md text-gray-600">
          <span
          className='text-blue-700'
          >Runtime: 
          </span >
            
            
            {movie.Runtime}</p> 

       <p className="plot mt-2 text-gray-700">
          <span
          className='text-blue-700'
          >Plot: 
          </span >{movie.Plot}</p>  


          <button className='border-solid border-2 border-indigo-600 rounded-lg p-3 mt-5 text-center capitalize hover:rounded-2xl' onClick={addfav
          }>add to favourite</button>     

        </div>
      </div>
      

      
    </div>
   
    </div>
  );
};

export default Nextpage;
