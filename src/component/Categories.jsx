import React from "react";
import "./categories.css";

function Categories({ categories, filterFoodCategory }) {
  return (
    <div class="container text-center mt-2 mb-4">
      <div class="row align-items-start">
        {categories.map((category, index) => {
          return (
            <div class="col-lg-1 col-md-1 mb-2 mx-2 " key={index}>
              <span
                className="category-style fw-bold"
                onClick={() => filterFoodCategory(category)}
              >
                {category.toUpperCase()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
