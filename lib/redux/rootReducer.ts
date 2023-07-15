import { darkModeSlice } from "./slices/darkModeSlice";
import { todoListSlice } from "./slices/todoListSlice";

export const reducer = {
  todos: todoListSlice.reducer,
  darkMode: darkModeSlice.reducer,
};
