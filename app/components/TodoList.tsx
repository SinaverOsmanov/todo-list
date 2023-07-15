"use client";

/* Core */
import { useEffect, useState } from "react";

/* Instruments */
import { useSelector, useDispatch } from "@/lib/redux";
import { FilterTodos, Todo } from "@/app/types/todos";
import { TodoItem } from "./TodoItem";
import { FilterSelect } from "./FilterSelect";
import { add, selectTodos } from "@/lib/redux/slices/todoListSlice";
import Button from "./ui/Button";
import Input from "./ui/Input";

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);
  const [selectedFilter, setSelectedFilter] = useState<FilterTodos>("all");

  function addTodo(title: string) {
    const newTodo = {
      id: Date.now(),
      title: title,
      checked: false,
    };

    dispatch(add(newTodo));
    setTodoTitle("");
  }

  function changeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoTitle(event.target.value);
  }

  function handleFilterChange(value: FilterTodos) {
    setSelectedFilter(value);
  }

  function filterTodos(filter: FilterTodos): Todo[] {
    let array = todos;

    if (todos.length === 0) {
      return todos;
    }

    if (filter === "uncompleted") {
      array = todos.filter((todo) => !todo.checked);
    } else if (filter === "completed") {
      array = todos.filter((todo) => todo.checked);
    }

    return array;
  }

  useEffect(() => {
    const todos = filterTodos(selectedFilter);
    setFilteredTodos(todos);
  }, [todos, selectedFilter]);

  return (
    <div className={`max-w-md`}>
      <div className="mb-4">
        <FilterSelect
          value={selectedFilter}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
        />
      </div>
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Введите задачу"
          value={todoTitle}
          onChange={changeTitle}
          className="border border-gray-300 rounded px-3 py-2 flex-grow break-words dark:bg-gray-800 dark:text-white"
        />
        <Button
          disabled={!todoTitle}
          onClick={() => addTodo(todoTitle)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded dark:bg-blue-800 disabled:bg-slate-600"
        >
          Add
        </Button>
      </div>
      <ul className="mt-4">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <li className="text-gray-500 dark:text-gray-400">Нет задач</li>
        )}
      </ul>
    </div>
  );
};
