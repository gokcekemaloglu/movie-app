import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

export const MovieContext = createContext()

const MovieProvider = ({children}) => {

    
    const API_KEY = process.env.REACT_APP_TMDB_KEY

    const DATA_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

    const [movies, setMovies] = useState([])
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)    

    const getMovies = async(API_ADDRESS) => {
        setLoading(true)

        try {
            const data = await axios.get(API_ADDRESS)
            setMovies(data.data.results) 
            // console.log(movies);
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getMovies(DATA_URL)
    },[])    

    if (loading) {
        return <p>Movies loading, please wait for a while...</p>
    }

    if (error) {
        return <p>Uppps...😯 Something went wrong...</p>
    }

  return (
    <MovieContext.Provider value={{movies, setMovies, getMovies, loading}}>
        {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider