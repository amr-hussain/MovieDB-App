import { configureStore } from '@reduxjs/toolkit';

import movieReducer from './slices/movieSlice'; // this is the default export 
import searchQuery from './slices/search'

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        searchQuery: searchQuery,
        // nameOfSlice : defaulImportName
    },
});

// we don't expert the store as default
// because we need it as arguement in main.jsx
