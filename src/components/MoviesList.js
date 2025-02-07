import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="bg-black scrollbar-hide ml-10">
      <h1 className="text-3xl p-3 m-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 p-2">
          {movies?.map((movie, index) => (
            <MovieCard key={index} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
