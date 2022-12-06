import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Allusers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://doctors-portal-server-ahm-rubayed.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const hanldeMakeAdmin = (id) => {
    fetch(`https://doctors-portal-server-ahm-rubayed.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            toast.success('Make admin successful.')
            refetch();
        }
      });
  };
  return (
    <div>
      <h3 className="text-3xl">All Users</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== 'admin'  && (
                    <button
                      className="btn btn-blue-600"
                      onClick={() => hanldeMakeAdmin(user._id)}>Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
