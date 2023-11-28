import React, { useContext } from "react";
import { MainContext } from "./MainContext";

export default function DisplayTasks() {
  const { tasks, handleDelete, handleCompleted, selectedFilter } =
    useContext(MainContext);

  const filteredTasks =
    selectedFilter === "hepsi"
      ? tasks
      : selectedFilter === "tamamlanmış"
      ? tasks.filter((task) => task.completed === true)
      : selectedFilter === "tamamlanmamış"
      ? tasks.filter((task) => task.completed === false)
      : tasks.filter((task) => task.category === selectedFilter);

  return (
    <div className="mt-3">
      {filteredTasks.map((task, key) => (
        <div className="d-flex flex-column border px-2 py-1 rounded mb-2">
          <div className="d-flex align-items-start gap-2">
            <p
              style={{ fontSize: "1.5rem", lineHeight: "1", cursor: "pointer" }}
              onClick={() => {
                handleCompleted(key);
              }}
            >
              {!task.completed ? <span>&#x2610;</span> : <span>&#x2611;</span>}
            </p>
            <b
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                flexGrow: 1,
              }}
            >
              {task.title}
            </b>
            <button
              className="btn btn-danger ms-4"
              onClick={() => {
                handleDelete(key);
              }}
            >
              Sil
            </button>
          </div>
          <div>
            <span
              className="badge bg-primary px-2 py-1"
              style={{ lineHeight: "1.2" }}
            >
              {task.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
