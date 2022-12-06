import {useQuery} from  '@tanstack/react-query'
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AppointmentAvailable = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null)
  const date = format(selectedDate, "PP")

  const {data: appointmentOptions = [], refetch} = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: async() => {
      const res = await fetch(`https://doctors-portal-server-ahm-rubayed.vercel.app/appointmentOptions?date=${date}`);
      const data = await res.json()
      return data
    }
  })

  return (
    <div className="my-24 max-w-screen-xl mx-auto">
      <p className="text-secondary text-center text-bold text-lg">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {
        treatment && 
        <BookingModal
        selectedDate={selectedDate}
        treatment={treatment}
        setTreatment={setTreatment}
        refetch={refetch}
      ></BookingModal>
      }
    </div>
  );
};

export default AppointmentAvailable;
