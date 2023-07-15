import type { ReduxState } from "@/lib/redux";

export const selectDarkMode = (state: ReduxState) => state.darkMode.darkMode;
