import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import img from "../../assets/images/doctor.png"

//import icons
import { ImAddressBook } from "react-icons/im";
import { BiMailSend } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";


const About = () => {


  return (
    <div>
    
<div class="py-16 bg-white">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src={img} alt="image" loading="lazy" width="100%" height=""/>
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">About Us</h2>
          <p class="mt-6 text-gray-600"> Welcome to Dental Medical Care, where your oral health and satisfaction are our top priorities. We are a leading dental care provider dedicated to delivering exceptional services tailored to your unique needs. With a team of highly skilled and compassionate dental professionals, we strive to create a positive and comfortable experience for every patient who walks through our doors.</p>
          <p class="mt-6 text-gray-600"> We uphold the highest standards of dental care and continuously strive for excellence. Our team of experienced dentists, hygienists, and support staff are committed to staying at the forefront of dental advancements, techniques, and technologies. By combining our expertise with state-of-the-art equipment, we provide you with the most effective and comprehensive dental solutions available.</p>
        </div>
      </div>
  </div>
</div>
   
    </div>
  );
};

export default About;