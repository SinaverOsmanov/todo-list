import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { darkModeSliceState } from "../../types/slices";

const initialState: darkModeSliceState = {
  // инициализация состояния темы
  darkMode: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      // изменяем тему
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleThemeMode } = darkModeSlice.actions;
