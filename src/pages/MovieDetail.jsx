import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_TMDB_KEY;

const MovieDetail = () => {

  const {id} = useParams()
  
  const [filmDetail, setFilmDetail] = useState("")
  
  const {title, overview, poster_path, vote_average, vote_count, release_date} = filmDetail

  const DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  const VIDEO_URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
  const IMG_URL = `https://image.tmdb.org/t/p/w1280`

  const Image = "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  useEffect(()=>{
    axios.get(DETAIL_URL).then((res)=> setFilmDetail(res.data))
  },[DETAIL_URL])
  
  return (
    <div className="flex flex-col items-center justify-center container px-10 mx-auto py-10 shadow-xl">
      <div className="py-8">          
        <h1 className="dark:text-white text-3xl">{title}</h1>
      </div>     
      
      <div className="flex flex-col items-center justify-center gap-y-32 shadow-xl">

        <iframe width="652" height="367" src="https://www.youtube.com/embed/CVpUuw9XSjY" title="Redux For Beginners | React Redux Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <div className="flex flex-col md:flex-row max-w-6xl rounded-lg bg-gray-100 shadow-lg">            
          <img
            className=" lg:w-1/3 h-96 lg:h-[600px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={poster_path ? IMG_URL + poster_path : Image} alt="poster"
          />           
          <div className="p-4 m-5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl text-center text-gray-400">Overview</h2>
              <p className="text-xl text-gray-400">{overview}</p>
            </div>
            
            <div>
              <ul className="bg-gray-200 rounded-lg border border-gray-400 text-gray-600 p-2 m-2">
                <li className="m-2 border-b-2 w-full">Release Date: {release_date}</li>
                <li className="m-2 border-b-2 w-full">Vote Average: {vote_average}</li>
                <li className="m-2 border-b-2 w-full">Vote Count: {vote_count}</li>
                <li>
                  <Link 
                    to={-1}
                    className="text-green-600 hover:text-orange-700 transition duration-300 ease-in-out m-4"
                  >
                    Go Back
                  </Link>
                </li>
              </ul>                
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MovieDetail