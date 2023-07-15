import { Todo } from "@/app/types/todos";

export interface darkModeSliceState {
  darkMode: boolean;
}

export interface TodoListSliceState {
  todos: Todo[];
}
