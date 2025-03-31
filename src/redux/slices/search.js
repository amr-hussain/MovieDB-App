import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  query : "",
};

const searchSlice = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    changeQuery: (state, action) => {

        state.query = action.payload;
    },
  },
});

export const { changeQuery } = searchSlice.actions;

export default searchSlice.reducer;