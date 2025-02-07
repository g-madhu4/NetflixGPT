import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    movieTralier:null,
    upCominingMovies:null,
    topMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTralier:(state,action)=>{
        state.movieTralier=action.payload;
    },
    addPopularMovies:(state,action)=>{
        state.popularMovies=action.payload;
    },
    addUpCominingMovies:(state,action)=>{
      state.upCominingMovies=action.payload;
    },
    addTopMovies:(state,action)=>{
      state.topMovies=action.payload;
    }
  },
});

export const { addNowPlayingMovies,addTralier,addPopularMovies, addUpCominingMovies,addTopMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
