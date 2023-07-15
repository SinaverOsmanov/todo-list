import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "@/app/types/todos";
import { TodoListSliceState } from "../../types/slices";

const initialState: TodoListSliceState = {
  // инициализация состояния Списка задач
  todos: [],
};

export const todoListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      // добавляем задачу в массив задач
      state.todos.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      // удаляем задачу в массив задач
      state.todos = state.todos.filter(
        (todo: Todo) => todo.id !== action.payload
      );
    },
    toggleCheck: (state, action: PayloadAction<number>) => {
      // изменяем состояние задачи что она выполнилась или нет
      const todoId = action.payload;

      const todo = state.todos.find((todoItem) => todoItem.id === todoId);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
  },
});

export const { add, remove, toggleCheck } = todoListSlice.actions;
