import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  
    const movies=useSelector(store=>store.movies)
    console.log(movies);
    // console.log(movies.popularMovies);

  return (
    <div className='-mt-14 relative z-20 bg-black scrollbar-hide'>
    
     <MoviesList title={"Now Playing "} movies={movies?.nowPlayingMovies} />
     <MoviesList title={"Top Rated "} movies={movies?.topMovies} />
     <MoviesList title={"Upcoming"} movies={movies?.upCominingMovies} />
     <MoviesList title={"Popular"} movies={movies?.popularMovies} />
    </div>
  )
}

export default SecondaryContainer
