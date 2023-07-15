import type { ReduxState } from "@/lib/redux";

export const selectTodos = (state: ReduxState) => state.todos.todos;
