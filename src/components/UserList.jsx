import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsd5-mock-backend.onrender.com/members")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Members List</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Last Name</th>
            <th className="border border-gray-300 p-2">Position</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{member.name}</td>
              <td className="border border-gray-300 p-2">{member.lastname}</td>
              <td className="border border-gray-300 p-2">{member.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
