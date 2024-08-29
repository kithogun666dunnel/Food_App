import React, { useState } from "react";

const User = () => {
  const [count, setCount] = useState(0); // Initialize count with a default value
  const count2 = 5; // Example of a static value

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Pune</h3>
    </div>
  );
};

export default User;
