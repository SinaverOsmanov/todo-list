export type Todo = {
  id: number;
  title: string;
  checked: boolean;
};

export type FilterTodos = "all" | "uncompleted" | "completed";
