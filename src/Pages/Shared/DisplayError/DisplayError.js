import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div>
      <p className="text-lg text-red-500">Something went wrong</p>
      <p className="text-xl text-red-500">
        {error.statusText || error.message}
      </p>
      <h3 className="text-3xl">
        Please <button onClick={handleSignOut}>Sign Out</button> and log back in
        again
      </h3>
    </div>
  );
};

export default DisplayError;
