import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
  
    const getNowPlayingMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
       
       dispatch(addNowPlayingMovies(json.results));
      } catch (error) {
       
      }
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []); // Add dispatch to the dependency array
  
}
export default useNowPlayingMovies;