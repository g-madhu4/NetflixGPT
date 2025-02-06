import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTralier } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useVideoBack = (movieID) => {
 

    const dispatch=useDispatch();
         const getMovieVideos=async()=>{
            const data=await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,API_OPTIONS);
            const json=await data.json();
            const trailers=json.results.filter(movie=>movie.type==="Trailer")
            const trailer=trailers.length?trailers[0]:json.results[0];
            dispatch(addTralier(trailer));
         }
    
       useEffect(()=>{
        getMovieVideos();
       },[]);
}

export default useVideoBack;
