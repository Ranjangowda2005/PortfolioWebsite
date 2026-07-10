import React, { useState } from "react";

const Input = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    console.log(data);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />

      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Input;
