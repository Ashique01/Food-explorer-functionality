import React, { useState } from "react";
import data from "../../data";
import Food from "./Food";
import Categories from "./Categories";

const allCategories = ["All", ...new Set(data.map((food) => food.category))];
console.log(allCategories);
function Foods() {
  const [foods, setFoods] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterFoodCategory = (category) => {
    if (category === "All") {
      setFoods(data);
      return;
    }
    const newItems = data.filter((food) => food.category === category);
    setFoods(newItems);
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-12 col-md-12">
          <h1 className="text-center text-secondary fw-bold pb-2 mb-4 mt-5">
            <span className="border-bottom border-primary">
              Food You Can Test
            </span>
          </h1>
          <Categories
            categories={categories}
            filterFoodCategory={filterFoodCategory}
          />
        </div>
        <div className="col-12 col-md-12 col-lg-12">
          <Food foods={foods} />
        </div>
      </div>
    </div>
  );
}

export default Foods;
