import React, { useContext } from "react";
import { MainContext } from "./MainContext";

export default function SelectCategory() {
  const { handleCategoryChange, selectedCategory } = useContext(MainContext);

  return (
    <div className="d-flex mt-2">
      <div class="form-check me-3">
        <input
          class="form-check-input"
          type="radio"
          name="kategori"
          id="ev"
          checked={selectedCategory === "ev"}
          onChange={handleCategoryChange}
        />
        <label class="form-check-label" for="kategori">
          Ev
        </label>
      </div>
      <div class="form-check mx-3">
        <input
          class="form-check-input"
          type="radio"
          name="kategori"
          id="okul"
          checked={selectedCategory === "okul"}
          onChange={handleCategoryChange}
        />
        <label class="form-check-label" for="kategori">
          Okul
        </label>
      </div>
      <div class="form-check mx-3">
        <input
          class="form-check-input"
          type="radio"
          name="kategori"
          id="work"
          checked={selectedCategory === "work"}
          onChange={handleCategoryChange}
        />
        <label class="form-check-label" for="kategori">
          İş
        </label>
      </div>
      <div class="form-check mx-3">
        <input
          class="form-check-input"
          type="radio"
          name="kategori"
          id="spor"
          checked={selectedCategory === "spor"}
          onChange={handleCategoryChange}
        />
        <label class="form-check-label" for="kategori">
          Spor
        </label>
      </div>
    </div>
  );
}
