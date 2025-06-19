import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import axios from "axios";

export default function Register() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { users, setUsers } = useContext(AppContext);

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async () => {
    const userObj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      pass: passRef.current.value,
    };

    const URL = `${API}/api/users/register`;

    try {
      await axios.post(URL, userObj);
      setUsers([...users, userObj]); // Optional: update context with new user
      navigate("/login"); // Navigate to login after successful registration
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          ref={nameRef}
        />
      </p>
      <p>
        <input
          type="text"
          ref={emailRef}
          placeholder="Enter Email Address"
        />
      </p>
      <p>
        <input
          type="password"
          ref={passRef}
          placeholder="New Password"
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <hr />
      <p>
        <Link to="/login">Already a member? Login Here...</Link>
      </p>
    </div>
  );
}
