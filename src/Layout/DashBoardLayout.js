import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../components/hooks/useAdmin";
import { AuthContext } from "../contexts/AuthProvider";
import Header from "../Pages/Shared/Header/Header";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile mt-6">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"/>
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard">MyAppointment</Link>
            </li>
            <li>
              {isAdmin && <>
                <Link to="/dashboard/allusers">All users</Link>
                <Link to="/dashboard/adddoctor">Add Doctor</Link>
                <Link to="/dashboard/managedoctors">Manage Doctors</Link>
              </>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
