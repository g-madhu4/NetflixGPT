import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const usePopularMovies=()=>{
    const dispatch = useDispatch();
  
    const getPopularMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
       
       dispatch(addPopularMovies(json.results));
      } catch (error) {
       
      }
    };
  
    useEffect(() => {
        getPopularMovies();
    }, []); // Add dispatch to the dependency array
  
}
export default usePopularMovies;