import React, { useState, useEffect } from "react";
import axios from "axios";
import Create from "../components/Create";
import Update from "../components/Update";


const Admin1 = () => {
  const [data, setData] = useState([]);
  const [editingMember, setEditingMember] = useState(null); 


  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      console.log("API Response:", response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);  
      setData(data.filter((member) => member.id !== id));
    } catch (error) {
      console.error(
        "Error deleting member:",
        error.response ? error.response.data : error.message
      );
    }
  }

  const handleEdit = (member) => {
    setEditingMember(member);
  }

  const handleUpdateSuccess = () => {
    setEditingMember(null); 
    fetchData(); 
  };

  return (
    <>
  <div className="p-4 mb-4">
      
      <Create fetchData={fetchData}/>
    </div>
    <div className="p-4 mb-4">
      
    <Update
        fetchData={fetchData}
        editingMember={editingMember}
        handleUpdateSuccess={handleUpdateSuccess} 
      />
    </div>

    <div>
      <h2>Data List</h2>
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
            {data.map((member) => (
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
    </div>

    </>
    
  );
};
export default Admin1;
