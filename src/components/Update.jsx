import React, { useState, useEffect } from "react";
import axios from "axios";

const Update = ({ fetchData, editingMember, handleUpdateSuccess }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    if (editingMember) {
      setName(editingMember.name || "");
      setLastname(editingMember.lastname || "");
      setPosition(editingMember.position || "");
    }
  }, [editingMember]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name) return;

    try {
      const updatedData = { name, lastname, position };
      await axios.put(`https://jsd5-mock-backend.onrender.com/members/${editingMember.id}`, updatedData);
      handleUpdateSuccess(); 
      fetchData(updatedData);
    } catch (error) {
      console.error("Error updating item:", error.response ? error.response.data : error.message);
    }
  };


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Update Member</h2>
      <form onSubmit={handleUpdate}>
      <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className="border p-2 mr-2"

        />
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="lastname"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="position"
          className="border p-2 mr-2"
        />

         <button className="bg-green-500 text-white px-4 py-2 mr-2" type="submit">Update</button>
      </form>
    </div>
  )
}
export default Update