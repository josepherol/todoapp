import React, { useState, useEffect } from "react";
import { MainProvider } from "./MainContext";
import CreateTask from "./CreateTask";
import SelectCategory from "./SelectCategory";
import DisplayTasks from "./DisplayTasks";
import Filter from "./Filter";
import "./App.css";

function App() {
  return (
    <MainProvider>
      <div className="container">
        <h1 className="my-3 text-center">To Do App</h1>
        <div className="row ">
          <div className="col-6 mx-auto">
            <CreateTask />
            <SelectCategory />
            <DisplayTasks />
          </div>
        </div>
      </div>
      <Filter />
    </MainProvider>
  );
}

export default App;
