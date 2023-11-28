import React, { useContext } from "react";
import { MainContext } from "./MainContext";

export default function CreateTask() {
  const { newTask, setNewTask, handleClick } = useContext(MainContext);
  return (
    <div className="mt-5 d-flex">
      <input
        type="text"
        className="form-control"
        id="item"
        placeholder="Yeni Görev"
        value={newTask}
        onChange={(event) => {
          setNewTask(event.target.value);
        }}
      />
      <button type="button" class="btn btn-success" onClick={handleClick}>
        Oluştur
      </button>
    </div>
  );
}
