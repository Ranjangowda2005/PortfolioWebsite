import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
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
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
