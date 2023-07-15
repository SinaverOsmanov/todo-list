"use client";

import { TodoList } from "./components/TodoList";
import DarkModeToggle from "./components/DarkModeToggle";

// Главная страница

// DarkModeToggle это обертка для изменения темы сайта

export default function App() {
  return (
    <DarkModeToggle>
      <section className="m-5">
        <div className="flex mb-5">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Список задач
          </h2>
        </div>
        <div className="flex row">
          <TodoList />
        </div>
      </section>
    </DarkModeToggle>
  );
}
