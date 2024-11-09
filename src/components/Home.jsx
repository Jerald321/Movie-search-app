import React from 'react'

const Home = ({iteam}) => {
  
  return (
    <div className='movieimg p-5 rounded-lg '>
      <img className='w-[250px] h-[300px]  rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110'  src={iteam.Poster} alt="" />
      <p className='text-blue-800' >{iteam.Title}</p>
      <h2>{iteam.Year}</h2>
      <button className='border border-gray-600 p-2 rounded-lg capitalize click'>click more  details .....</button>
    </div>
  )
}

export default Home
