import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState, ViewType } from "../../utils/types";

const initialState: CounterState = {
  title: "Menutender",
  view: ViewType.CategoryAdd,
};

export const appState = createSlice({
  name: "app",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<{ view: ViewType }>) => {
      state.view = action.payload.view;
    },
  },
});

export const { setView } = appState.actions;

export default appState.reducer;
