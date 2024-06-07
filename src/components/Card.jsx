import React from "react";

function Card(prop) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={prop.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{prop.title}</h2>
          <p>{prop.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">${prop.price}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
