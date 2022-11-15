import React from "react";
import bg from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section>
      <div className="hero rounded my-32" style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center w-full py-12">
          <div className="w-6/12">
             <h4 className="text-lg text-primary">Contact Us</h4>
             <h2 className="text-2xl text-white">Stay Connected with us</h2>
             <form className='flex flex-col mt-4'>
           <input type="email" placeholder="Email Address" className="input w-full my-2" required />
           <input type="text" placeholder="Subject" className="input w-full my-2" />
           <textarea className='textarea my-2' placeholder='Your Message' cols="10" rows="5"></textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
