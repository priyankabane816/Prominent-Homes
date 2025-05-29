import React from "react";
import { NavLink } from "react-router-dom";

const PropertyCard = ({ id,image, price, title,}) => {
  return (
    <div className="col-xl-4 col-md-6">
        <NavLink to={`/properties/${id}`} className="property-card-link">
      <div className="card" data-aos="fade-up">
        <img src={image} alt={title} className="img-fluid" />
        <div className="card-body">
          <span className="sale-rent">{price}</span>
          <h3>{title}</h3>
          <div className="card-content d-flex flex-column justify-content-center text-center">
            <div className="row propery-info">
              <div className="col">Area</div>
              <div className="col">Beds</div>
              <div className="col">Baths</div>
              <div className="col">Garages</div>
            </div>
            <div className="row">
              <div className="col">340m2</div>
              <div className="col">5</div>
              <div className="col">2</div>
              <div className="col">1</div>
            </div>
          </div>
        </div>
      </div>
      </NavLink>
    </div>
  );
};

export default PropertyCard;
