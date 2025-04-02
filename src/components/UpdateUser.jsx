import React, { useState } from "react";

function UpdateUser({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.name || "");
  const [lastname, setLastname] = useState(initialData.lastname || "");
  const [position, setPosition] = useState(initialData.position || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !lastname || !position) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    onSubmit({ name, lastname, position, id: initialData.id });
  };

  return (
    <div className="p-4 mb-4 ">
      
      <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />
        <input
        type="text"
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        className="border p-2 mr-2"
      />
         <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="border p-2 mr-2"
      />
        <button className="bg-green-500 text-white px-3 py-1">{initialData.id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}

export default UpdateUser;
