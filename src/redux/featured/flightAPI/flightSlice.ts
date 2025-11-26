import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFlights: [], 
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setAllFlights: (state, action) => {
      state.allFlights = action.payload;
    },
  },
});

export const { setAllFlights } = flightSlice.actions;
export default flightSlice.reducer;
