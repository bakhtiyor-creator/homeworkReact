import React from "react";

const Card = ({product}) => {
  return (
    <div className="col-4 my-5">
      <div className="card">
        <img src={product.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.Title}</h5>
          <p className="card-text">{product.Description}</p>
          <a href="#" className="btn btn-primary">
            {product.Id}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
