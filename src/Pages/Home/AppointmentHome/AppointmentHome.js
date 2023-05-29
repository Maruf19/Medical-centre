import React from "react";
import appointmentBg from "../../../assets/images/appointment.png"
import doctor from "../../../assets/images/img-dentist-1.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointmentHome = () => {
  return (
    <section className="my-32" style={{background: `url(${appointmentBg})`}}>
      <div className="hero min-h-[333px]">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="max-w-sm rounded-lg -mt-32 h-[536px] p-0" alt="" />
          <div className="text-white">
            <h4 className="text-lg text-primary mb-4">Appointment</h4>
            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentHome;
