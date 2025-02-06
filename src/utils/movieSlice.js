import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTralier:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTralier:(state,action)=>{
        state.movieTralier=action.payload;
    }
  },
});

export const { addNowPlayingMovies,addTralier } = moviesSlice.actions;

export default moviesSlice.reducer;
