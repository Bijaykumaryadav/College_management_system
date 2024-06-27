// TeacherSignIn.js
import { useState } from "react";
import {
  TeacherSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/TeacherSignInStyles";
import { Link } from "react-router-dom";
  import axios from "axios";


const TeacherSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state


  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/teacher/signin",
        { email, password }
      );
      console.log("Teacher Sign In:", { email, password });

      const token = response.data.token;
      console.log("Received token:", token); // Log the token to verify

      if (token) {
        localStorage.setItem("token", token);
        window.location.href = "/teacher/dashboard";
      } else {
        setError("Sign In failed: No token received");
      }
    } catch (error) {
      console.error("Teacher Sign In failed:", error);
      setError(error.response?.data?.message || "Sign In failed");
    }
  };

  return (
    <TeacherSignInContainer>
      <h2>Teacher Sign In</h2>
      <FormContainer>
        <h3>Welcome to BTI</h3>
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
        {/* Use Link component to navigate to teacher dashboard */}
        <SubmitButton to="/teacher/dashboard" onClick={handleSignIn}>
          Sign In
        </SubmitButton>
        <Link
          to="/teachers/register"
          style={{ padding: "13px", fontSize: "16px" }}
        >
          Create Account
        </Link>
        <Link style={{ fontSize: "16px" }}>Forgotten Password</Link>
      </FormContainer>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </TeacherSignInContainer>
  );
};

export default TeacherSignIn;
