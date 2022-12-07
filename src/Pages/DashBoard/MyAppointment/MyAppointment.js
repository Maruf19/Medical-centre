import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `https://doctors-portal-server-ahm-rubayed.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
        const res = await fetch(url, {
            headers: {
               authorization: `bearer ${localStorage.getItem('accessToken')}` 
            }
        });
        const data = await res.json();
        return data;
    }
})
  return (
    <div className="px-16">
      <h3 className="text-3xl">My Appointment</h3>
      <div className="overflow-x-auto mt-8">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Appointment</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(bookings).map((booking, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td className="">{booking.slot}</td>
                <td>
                  {
                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-primary btn-md text-white">Pay</button>
                      </Link>
                  }
                  {
                    booking.price && booking.paid && <span className="text-primary">Paid</span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
