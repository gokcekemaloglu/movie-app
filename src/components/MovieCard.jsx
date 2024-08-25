import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthorContext } from '../context/AuthorProvider';

const MovieCard = ({id, poster_path, title, vote_average, overview}) => {
  
  // console.log(movies);

  const navigate = useNavigate()

  const {currentUser} = useContext(AuthorContext)
  
  return (
    <div className="movie"
      // className="flex flex-wrap justify-center items-center bg-blue-900 cursor-pointer m-4 relative w-[300px] overflow-hidden shadow-[0,0,10px,white] rounded-[5px]" benimki
      id="container"
      onClick={()=>navigate("/details/"+id)}
    > 
      
      <img loading="lazy" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt="movie-card" />
      <div className="flex align-baseline justify-between p-1">
        <h2>{title}</h2>
        {/* kullanıcı login, register yada google ile giriş yaptıysa, AuthContext te currentUser oluşuyor, giriş yapıldıysa vote_average yi görebilsin */}

        {
          currentUser && (
            <span className={`tag ${vote_average  > 7 ? "green" : vote_average> 6.8 ? "orange": "red" } `}>{vote_average.toFixed(2)}</span>
          )
        }
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
          
      </div>
      
    </div>
  )
}

export default MovieCard