import React from 'react'
import { MovieImage_URL } from '../utils/constants'
const MovieCard = ({posterPath}) => {
  console.log(posterPath);
  return (
    <div className='w-48'>
      <img src={MovieImage_URL+posterPath} alt='moviecard' />
    </div>
  )
}

export default MovieCard;
