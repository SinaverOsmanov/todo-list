import { FilterTodos } from "../types/todos";
import Select from "./ui/Select";

type FilterSelectProps = {
  value: FilterTodos;
  onChange: (value: FilterTodos) => void;
  className?: string;
};

export const FilterSelect: React.FC<FilterSelectProps> = ({
  value,
  onChange,
  className,
}) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as FilterTodos;

    onChange(selectedValue);
  };

  return (
    <Select
      value={value}
      onChange={handleFilterChange}
      className={`border border-gray-300 rounded px-3 py-2 w-full dark:bg-gray-800 dark:text-white ${className}`}
    >
      <option value="all">Все</option>
      <option value="uncompleted">Показать только невыполненные задачи</option>
      <option value="completed">Показать только выполненные задачи</option>
    </Select>
  );
};
