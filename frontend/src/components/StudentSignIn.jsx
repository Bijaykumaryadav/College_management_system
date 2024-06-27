import { useState } from "react";
import axios from "axios";
import {
  StudentSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/StudentSignInStyles";
import { Link } from "react-router-dom";

const StudentSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/student/signin",
        { email, password }
      );
      console.log("Student Sign In:", { email, password });
      window.location.href = "/student/dashboard";
    } catch (error) {
      console.error("Student Sign In failed:", error);
      setError(error.response?.data?.message || "Sign In failed");
    }
  };

  return (
    <StudentSignInContainer>
      <h2>Student Sign In</h2>
      <FormContainer onSubmit={handleSignIn}>
        <h3>Welcome to BTI</h3>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
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
        <SubmitButton type="submit" onClick={handleSignIn}>
          Sign In
        </SubmitButton>
        <Link
          to="/students/register"
          style={{ padding: "13px", fontSize: "16px" }}
        >
          Create Account
        </Link>
        <Link style={{ fontSize: "16px" }}>Forgotten Password</Link>
      </FormContainer>
    </StudentSignInContainer>
  );
};

export default StudentSignIn;
