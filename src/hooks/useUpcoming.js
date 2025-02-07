import { useDispatch } from "react-redux";
import { addUpCominingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useUpcoming=()=>{
    const dispatch = useDispatch();
  
    const getUpComingMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
       
       dispatch(addUpCominingMovies(json.results));
      } catch (error) {
       
      }
    };
  
    useEffect(() => {
        getUpComingMovies();
    }, []); // Add dispatch to the dependency array
  
}
export default useUpcoming;