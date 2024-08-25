import React, { useContext, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { MovieContext } from '../context/MovieProvider'

const API_KEY = process.env.REACT_APP_TMDB_KEY
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

const Main = () => {
  const {movies, loading, getMovies} = useContext(MovieContext)
  // console.log(movies);

  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies(SEARCH_API + query)

  }
  
  return (
    <div 
    className="flex flex-col justify-center items-center m-6 p-2 bg-[#23242A] text-gray-400"
    >
      <form onSubmit={handleSubmit} className="flex justify-center p-2">
        <input onChange={(e)=>setQuery(e.target.value)} type="search" placeholder="Search for a movie..." id="search"
          className="text-gray-300 m-3 p-2 rounded-lg w-80 "
        />
        <button type="submit" className="btn-danger-bordered active:scale-90">Search</button>
      </form>
      
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Yükleniyor...</span>
          </div>
        ) : (movies.map((movie)=><MovieCard key={movie.id} {...movie}/>))}

      </div>

      
    </div>
  )
}

export default Main