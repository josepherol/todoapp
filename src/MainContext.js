import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [newTask, setNewTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedItem = localStorage.getItem("tasks");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const [selectedFilter, setSelectedFilter] = useState(() => {
    const savedItem = localStorage.getItem("selectedFilter");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "Hepsi";
  });

  useEffect(() => {
    localStorage.setItem("selectedFilter", JSON.stringify(selectedFilter));
  });

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.id);
  };

  const handleClick = () => {
    if (newTask.trim() === "") {
      alert("Task can't be empty.");
      return;
    }

    if (!selectedCategory) {
      alert("Please select a category.");
      return;
    }

    const updatedTasks = [
      ...tasks,
      {
        id: tasks.length === 0 ? 1 : tasks.length + 1,
        title: newTask,
        category: selectedCategory,
        completed: false,
      },
    ];

    setTasks(updatedTasks);
    setNewTask("");
    setSelectedCategory("");
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <MainContext.Provider
      value={{
        newTask,
        setNewTask,
        selectedCategory,
        setSelectedCategory,
        selectedFilter,
        setSelectedFilter,
        tasks,
        setTasks,
        handleCategoryChange,
        handleClick,
        handleDelete,
        handleCompleted,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
