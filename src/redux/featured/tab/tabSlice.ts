// src/redux/tabSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Tab = "Flights" | "Bus" | "Launch" | "Train" | "Hotel" | "Visa" | "Packages" | "Offers";

interface TabState {
  selectedTab: Tab;
}

const initialState: TabState = {
  selectedTab: "Flights",
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setSelectedTab: (state, action: PayloadAction<Tab>) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = tabSlice.actions;
export default tabSlice.reducer;
