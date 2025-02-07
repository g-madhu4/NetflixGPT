import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
  
    const getNowPlayingMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        console.log(json.results); // Check the data being logged
       dispatch(addNowPlayingMovies(json.results));
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []); // Add dispatch to the dependency array
  
}
export default useNowPlayingMovies;