import { useDispatch } from "react-redux";
import { addTopMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useTopMovies=()=>{
    const dispatch = useDispatch();
  
    const getTopMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
       
       dispatch(addTopMovies(json.results));
      } catch (error) {
       
      }
    };
  
    useEffect(() => {
        getTopMovies();
    }, []); // Add dispatch to the dependency array
  
}
export default useTopMovies;