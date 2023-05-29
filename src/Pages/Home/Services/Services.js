import React from "react";
import teeth from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Fluoride Treatment",
      description:
        "We provide professional fluoride treatment services to help protect and strengthen your teeth.",
      icon: teeth,
    },
    {
      id: 2,
      title: "Cavity Filling",
      description:
        "We offer professional cavity filling services to restore and protect your teeth from the damaging effects of tooth decay.",
      icon: cavity,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      description: "We offer professional teeth whitening services to help you achieve a brighter, whiter smile.",
      icon: whitening,
    },
  ];
  return (
    <div className="my-32 ">
      <div className="text-center">
        <h3 className="text-lg uppercase text-primary">Our Services</h3>
        <h2 className="text-4xl capitalize">Services we provide</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
