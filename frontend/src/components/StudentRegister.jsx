import { useState } from "react";
import {
  AdminRegisterContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/AdminRegisterStyles";
import axios from "axios"; // Import axios
import { Link } from "react-router-dom";

const StudentRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/students",
        { name, email, password }
      );
      if (response.status === 200) {
        // Registration successful, redirect to admin login
        window.location.href = "/student-signIn";
      } else {
        // Handle registration errors
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <AdminRegisterContainer>
      <h2>Student Register</h2>
      <FormContainer>
        <h3>Welcome to BTI</h3>
        <InputField
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton onClick={(e) => handleRegister(e)}>Register</SubmitButton>
        {/* <Link style={{ padding: "25px", fontSize: "16px" }}>
          Sign In using Google
        </Link> */}
      </FormContainer>
    </AdminRegisterContainer>
  );
};

export default StudentRegister;
