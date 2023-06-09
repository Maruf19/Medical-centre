import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();

  const { treatment, price, appointmentDate, slot } = booking;
  return (
    <div>
      <h3 className="text-3xl mt-6">Payment for {treatment}</h3>
      <h3 className="text-lg mt-5">
        Please pay <strong>${price}</strong>for your appointment on{" "}
        {appointmentDate} on {slot}
      </h3>
      <div className="w-96 my-12 p-8 rounded border">
      <Elements stripe={stripePromise}>
      <CheckoutForm booking={booking}/>
    </Elements>
      </div>
    </div>
  );
};

export default Payment;
