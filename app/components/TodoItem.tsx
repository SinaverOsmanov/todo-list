import { useDispatch } from "react-redux";
import { Todo } from "../types/todos";
import { remove, toggleCheck } from "@/lib/redux/slices/todoListSlice";
import Input from "./ui/Input";
import Button from "./ui/Button";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  function removeTodo(id: number) {
    dispatch(remove(id));
  }

  function completedTodo(id: number) {
    dispatch(toggleCheck(id));
  }

  return (
    <li className="flex items-center break-words whitespace-normal justify-between border-b border-gray-300 py-2 dark:border-gray-700">
      <span
        className={`flex-grow break-words ${
          todo.checked
            ? "line-through text-gray-500 dark:text-gray-400"
            : "dark:text-white"
        }`}
      >
        {todo.title}
      </span>
      <Button
        onClick={() => removeTodo(todo.id)}
        className="ml-2 dark:text-red-400 py-1 px-2 font-bold text-red-600 mr-3"
      >
        remove
      </Button>
      <Input
        type="checkbox"
        checked={todo.checked}
        onChange={() => completedTodo(todo.id)}
        className="form-checkbox h-5 w-5 text-blue-500 dark:text-gray-400 rounded"
      />
    </li>
  );
};
