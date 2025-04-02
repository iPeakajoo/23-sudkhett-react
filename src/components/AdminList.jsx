import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateUser from "./UpdateUser";

const API_URL = "https://jsd5-mock-backend.onrender.com/members";

const AdminList = () => {
  const [members, setMembers] = useState([]);
  const [editingMember, setEditingMember] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get(API_URL);
      setMembers(response.data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("คุณต้องการลบสมาชิก?")) return;

    try {
      await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);
      setMembers(members.filter((member) => member.id !== id));
    } catch (error) {
      console.error(
        "Error deleting member:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleSubmit = async (data) => {
    console.log("Data to submit:", data);
    try {
        if (data.id) {
            const response = await axios.put(`${API_URL}/${data.id}`, data, {
              headers: { "Content-Type": "application/json" }
            });
            console.log("API Response:", response.data);
        } else {
            const response = await axios.post(API_URL, data, {
              headers: { "Content-Type": "application/json" }
            });
            console.log("API Response:", response.data);
        }
        setEditingMember(null);
        fetchMembers();
    } catch (error) {
        console.error("Error updating/creating member:", error.response ? error.response.data : error.message);
    }
};


  const handleEdit = (member) => {
    setEditingMember(member);
  };

  return (
    <>
      <div className="p-6">
        <div className="mb-6 p-4 bg-white shadow rounded">
          <h2 className="text-xl font-bold mb-2">
            {editingMember ? "Edit Member" : "Create Member"}
          </h2>
          <UpdateUser
            key={editingMember?.id || "new"}
            onSubmit={handleSubmit}
            initialData={editingMember || {}}
          />
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Members List</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Last Name</th>
              <th className="border border-gray-300 p-2">Position</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{member.name}</td>
                <td className="border border-gray-300 p-2">
                  {member.lastname}
                </td>
                <td className="border border-gray-300 p-2">
                  {member.position}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 mr-2 cursor-pointer"
                    onClick={() => handleEdit(member)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 cursor-pointer"
                    onClick={() => handleDelete(member.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminList;
