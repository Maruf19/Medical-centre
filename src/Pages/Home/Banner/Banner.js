import React from "react";
import banner from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import InfoCards from "../InfoCards/InfoCards";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero banner">
      <div className="overlay py-8">
        <div className="hero-content flex-col lg:flex-row-reverse px-16 mx-0 ">
          <img src={banner} className="w-1/2 rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
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
