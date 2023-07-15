"use client";

import {
  selectDarkMode,
  toggleThemeMode,
} from "@/lib/redux/slices/darkModeSlice";
import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./ui/Button";

interface DarkModeToggleProps {
  children: ReactNode;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ children }) => {
  const isDarkMode = useSelector(selectDarkMode);

  const dispatch = useDispatch();

  const handleDarkModeToggle = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className=" dark:bg-slate-800 p-5 pb-10">
        <Button
          onClick={handleDarkModeToggle}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
        {children}
      </div>
    </div>
  );
};

export default DarkModeToggle;
