import { createSlice } from "@reduxjs/toolkit";

 export const horsesSlice = createSlice({
  name: "horses",
  initialState : {
    horses : []
  },
  reducers: {
    subscribe: (state, action) => {
      state.horses = action.payload;
    },
    backToStart: (state, _) => {
      state.horses = [];
    },
  }
});

export default horsesSlice.reducer;
export const { subscribe, backToStart } = horsesSlice.actions;

