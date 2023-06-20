import React from "react";

function Food({ foods }) {
  return (
    <div className="container text-center">
      <div className="row justify-content-start">
        {foods.map((food) => {
          const { name, description, price, category, image, id } = food;
          return (
            <div className="col-12 col-lg-6 col-md-6 mb-3" key={id}>
              <div className="container text-center">
                <div className="row ">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex align-items-center">
                    <img
                      src={image}
                      className="img-thumbnail"
                      style={{ width: "150px", height: "150px" }}
                      alt={name}
                    ></img>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 mt-2  ">
                    <div className="text-start d-flex justify-content-between font-monospace border-bottom border-primary">
                      <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>
                        {name}
                      </h6>
                      <h6 style={{ fontSize: "12px", fontWeight: "bold" }}>
                        {price}
                      </h6>
                    </div>
                    <div className="text-start mt-2">
                      <p style={{ fontSize: "10px" }}>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Food;
