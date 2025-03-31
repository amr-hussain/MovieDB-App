import { buildCreateSlice, createSlice } from '@reduxjs/toolkit';

// ##################### Thunk Tutorial #########################
"before thunk we fetched moives from axios in dashboard.jsx then stored it locally in dashboard object only using useState"
"using Thunk we can fetch the movies asynchronously and store it in store so as to be accessible through any object"
// using redux-thunk with axios to do async logic like fetching APIs
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// API settings
const apiKey = "461c570286691170bc9b32eaaf31542c";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;



// fetching data 
// createAsyncThunk(name, callbackFunc)
" remember that createAsyncThunk handle its lifecycle (pending, fulfilled, rejected) in extraReducers. \
but we have to define it seperately "
export const fetchMovies = createAsyncThunk('movies/fetchMovies',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data.results; // this returns an array of movies to be stored in payload
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); //this error is stored in the paylod, also.
    }
  }
);

// next, modifying the initial state to have not only the favorites array but the array of movies fetched
//  and the loading and error states for api control
const initialState = {
  favorites: [],
  movies: [],
  error: null,
  loading: false,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  // regulrar synchronous reducers
  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.favorites.some(movie => movie.id === action.payload.id);
      if (!exists) {
        state.favorites.push({
          id: action.payload.id,
          title: action.payload.title,
          posterPath: action.payload.posterPath,
          rating: action.payload.rating
        });
      }
      else {
        state.favorites = state.favorites.filter((movie) => movie.id !== action.payload.id);

      }
    },

    setLoading: (state) => {
      state.loading = true;
    },
  },
  // below is other type of reducers that abstract multiple pre-defined asynchrounous functions to deal with api
  extraReducers: (builder) => {
    builder
    .addCase(fetchMovies.pending, (state) => { state.loading = true; state.error = null; })
    .addCase(fetchMovies.fulfilled, (state, action) => { state.loading = false; state.movies = action.payload; })
    .addCase(fetchMovies.rejected, (state, action) => {state.loading = false; state.error = action.payload})
  }
});

export const { toggleFavorite, setLoading } = movieSlice.actions;

export default movieSlice.reducer;