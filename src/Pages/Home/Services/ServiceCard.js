import React from "react";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-16 text-center">
      <figure>
        <img src={icon} alt="" className="w-20" />
      </figure>
      <div className="card-body">
        <h2 className="card-title block">{title}</h2>
        <p className="text-neutral">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
