import React, { useContext } from "react";
import { MainContext } from "./MainContext";

export default function Filter() {
  const { selectedFilter, setSelectedFilter } = useContext(MainContext);

  return (
    <div>
      <button
        type="button"
        style={{ marginLeft: "2.5px" }}
        className={`btn btn-primary rounded-2  rounded-2 ${
          selectedFilter === "hepsi" ? "disabled" : ""
        } `}
        onClick={() => {
          setSelectedFilter("hepsi");
        }}
      >
        hepsi
      </button>
      <button
        type="button"
        style={{ marginLeft: "2.5px" }}
        className={`btn btn-primary rounded-2  ${
          selectedFilter === "ev" ? "disabled" : ""
        } `}
        onClick={() => {
          setSelectedFilter("ev");
        }}
      >
        ev
      </button>
      <button
        type="button"
        style={{ marginLeft: "2.5px" }}
        className={`btn btn-primary rounded-2  ${
          selectedFilter === "work" ? "disabled" : ""
        } `}
        onClick={() => {
          setSelectedFilter("work");
        }}
      >
        work
      </button>
      <button
        type="button"
        style={{ marginLeft: "2.5px" }}
        className={`btn btn-primary rounded-2  ${
          selectedFilter === "okul" ? "disabled" : ""
        } `}
        onClick={() => {
          setSelectedFilter("okul");
        }}
      >
        okul
      </button>
      <button
        type="button"
        style={{ marginLeft: "2.5px" }}
        className={`btn btn-primary rounded-2  ${
          selectedFilter === "spor" ? "disabled" : ""
        } `}
        onClick={() => {
          setSelectedFilter("spor");
        }}
      >
        spor
      </button>
      <button
        type="button"
        style={{ marginLeft: "2.5px" }}
        className={`btn btn-primary rounded-2  ${
          selectedFilter === "tamamlanmış" ? "disabled" : ""
        } `}
        onClick={() => {
          setSelectedFilter("tamamlanmış");
        }}
      >
        tamamlanmış
      </button>
      <button
        type="button"
        style={{ marginLeft: "2.5px" }}
        className={`btn btn-primary rounded-2  ${
          selectedFilter === "tamamlanmamış" ? "disabled" : ""
        } `}
        onClick={() => {
          setSelectedFilter("tamamlanmamış");
        }}
      >
        tamamlanmamış
      </button>
    </div>
  );
}
