import React, { useState } from "react";
import "./App.css";
import validator, { isStrongPassword } from "validator";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (value) => {
    setPassword(value);

    if (validator.isStrongPassword(value)) {
      setError("✅ Is Strong Password");
    } else {
      setError("❌ Enter a Strong Password");
    }
  };

  return (
    <>
      <div className="card">
        <h1>Checking Password Strength</h1>
        <label>Enter Password: </label>
        <input
          type="text"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => handleChange(e.target.value)}
        />
        <p style={{color: validator.isStrongPassword(password)? "green":"red",
          fontSize:"1.5rem", fontWeight:"bold"
        }}>{error}</p>
      </div>
    </>
  );
}

export default App;
