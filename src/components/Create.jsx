import React, { useState } from "react";
import axios from "axios";

const Create = ({ fetchData }) => {
  const [name, setName] = useState("");
   const [lastname, setLastname] = useState("");
    const [position, setPosition] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;

    try {
      const newData = { name, lastname , position };
      await axios.post("https://jsd5-mock-backend.onrender.com/members/", newData);
      fetchData(); 
      setName("");
      setLastname("");
      setPosition("");
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create New Member</h2>
      <form onSubmit={handleSubmit}>
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

        <button className="bg-green-500 text-white px-4 py-2 mr-2" type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
