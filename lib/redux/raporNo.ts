import { createSlice } from "@reduxjs/toolkit";



const initialState = {
 
  raporNo:null,
};

export const raporSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setRaporNo:(state,action) => {
      state.raporNo = action.payload;
    }


  },
});

export const { setRaporNo } = raporSlice.actions;
export const raporReducer = raporSlice.reducer;
