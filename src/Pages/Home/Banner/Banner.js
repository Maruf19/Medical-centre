import React from "react";
import banner from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import InfoCards from "../InfoCards/InfoCards";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero banner">
      <div className="overlay py-8">
        <div className="hero-content max-w-full flex-col lg:flex-row-reverse px-16 mx-0 ">
          <img src={banner} className="w-1/2 rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6 pr-12">
            We offer a wide range of dental services to patients of all ages, ensuring that your entire family's oral health needs are met under one roof. From routine dental check-ups and cleanings to advanced restorative procedures, cosmetic dentistry, and orthodontic treatments, we have the expertise and state-of-the-art technology to deliver outstanding results.
            </p>
           <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      <InfoCards></InfoCards>
      </div>
    </div>
  );
};

export default Banner;
